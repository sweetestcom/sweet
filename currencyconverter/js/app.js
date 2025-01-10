class CurrencyConverter {
    constructor() {
        this.storage = new StorageManager();
        this.currencyData = null;
        this.previousData = null;
        this.currentLanguage = this.storage.getLanguage();
        
        this.initializeElements();
        this.initializeState();
        this.setupEventListeners();
        this.initialize();
        this.initializeBackToTop();
        this.inputTimer = null;
    }

    initializeElements() {
        this.elements = {
            searchInput: document.getElementById('currency-search'),
            amountInput: document.getElementById('amount-input'),
            baseCurrencySelect: document.getElementById('base-currency'),
            starredList: document.getElementById('starred-list'),
            currencyGrid: document.getElementById('currency-grid'),
            languageSelect: document.getElementById('language-select'),
            themeToggle: document.getElementById('theme-toggle'),
            updateTime: document.getElementById('update-time'),
            starredSection: document.getElementById('starred-currencies'),
            backToTop: document.getElementById('back-to-top'),
            historyButton: document.getElementById('history-button'),
            historyPanel: document.getElementById('history-panel'),
            historyList: document.querySelector('.history-list'),
            clearHistory: document.getElementById('clear-history')
        };
    }

    initializeState() {
        this.currentLanguage = this.storage.getLanguage();
        this.elements.languageSelect.value = this.currentLanguage;
        
        const theme = this.storage.getTheme();
        document.documentElement.setAttribute('data-theme', theme);
        this.elements.themeToggle.innerHTML = `<i class="fas fa-${theme === 'dark' ? 'sun' : 'moon'}"></i>`;
    }

    setupEventListeners() {
        this.elements.searchInput.addEventListener('input', () => this.handleSearch());
        this.elements.amountInput.addEventListener('input', () => {
            this.updateConversions(true); 

            if (this.inputTimer) {
                clearTimeout(this.inputTimer);
            }
            this.inputTimer = setTimeout(() => {
                this.handleInputComplete();
            }, 1500); 
        });
        this.elements.baseCurrencySelect.addEventListener('change', () => this.updateConversions());
        this.elements.languageSelect.addEventListener('change', (e) => this.handleLanguageChange(e));
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.elements.historyButton.addEventListener('click', () => this.toggleHistory());
        this.elements.clearHistory.addEventListener('click', () => this.clearHistory());
    }

    handleInputComplete() {
        const input = this.elements.amountInput.value.trim();
        if (!input) return;
        
        const baseCurrency = this.elements.baseCurrencySelect.value;
        this.addToHistory(input, baseCurrency);
    }

    initializeBackToTop() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.elements.backToTop.classList.add('visible');
            } else {
                this.elements.backToTop.classList.remove('visible');
            }
        });

        this.elements.backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    async initialize() {
        await this.loadData();
        this.initializeSortable();
        this.updateUI();
    }

    async loadData() {
        const storedData = this.storage.getCurrencyData();
        
        if (storedData) {
            this.previousData = storedData.data;
            this.currencyData = storedData.data;
            this.updateUI();
        }

        if (this.storage.isDataExpired()) {
            await this.refreshData();
        }
    }

    async refreshData() {
        try {
            const response = await fetch('https://latest.currency-api.pages.dev/v1/currencies/eur.json');
            if (!response.ok) throw new Error('Network response was not ok');
            
            const newData = await response.json();
            if (!this.currencyData || this.currencyData.date !== newData.date) {
                this.previousData = this.currencyData;
                this.currencyData = newData;
                this.storage.saveCurrencyData(newData);
                this.updateUI();
            }
        } catch (error) {
            console.error('Failed to fetch currency data:', error);
            this.showError(utils.translations[this.currentLanguage].errorFetching);
        }
    }

    handleSearch() {
        const searchTerm = this.elements.searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.currency-card');
        
        cards.forEach(card => {
            const currencyCode = card.dataset.currency.toLowerCase();
            const shouldShow = currencyCode.includes(searchTerm);
            card.style.display = shouldShow ? 'block' : 'none';
        });
    }

    updateConversions(skipHistory = false) {
        if (!this.currencyData) return;
    
        const inputValue = this.elements.amountInput.value;
        const amounts = utils.parseMultipleAmounts(inputValue);
        const baseCurrency = this.elements.baseCurrencySelect.value;
        const baseRate = this.currencyData.eur[baseCurrency];
    
        document.querySelectorAll('.currency-card').forEach(card => {
            const currencyCode = card.dataset.currency;
            const targetRate = this.currencyData.eur[currencyCode];
            const conversionRate = targetRate / baseRate;
            
            const valuesList = card.querySelector('.currency-values');
            valuesList.innerHTML = amounts.map(amount => {
                const converted = amount * conversionRate;
                return `<div class="converted-amount">${utils.formatCurrency(converted, currencyCode)}</div>`;
            }).join('');
    
            if (this.previousData) {
                const previousRate = this.previousData.eur[currencyCode];
                const change = utils.calculateChange(previousRate, targetRate);
                if (change) {
                    const changeElement = card.querySelector('.rate-change');
                    const changeValue = parseFloat(change);
                    changeElement.textContent = `${changeValue >= 0 ? '▲' : '▼'} ${Math.abs(changeValue)}%`;
                    changeElement.className = `rate-change ${changeValue >= 0 ? 'positive' : 'negative'}`;
                }
            }
        });
    }

    addToHistory(input, baseCurrency) {
        let historyEntry;
    
        const separators = [';', '；', '؛'];
        const hasSeparator = separators.some(sep => input.includes(sep));
    
        if (hasSeparator) {
            const numbers = input.split(/[;；؛]/)
                .map(n => n.trim())
                .filter(n => n);
            if (numbers.length > 0) {
                historyEntry = {
                    type: 'multiple',
                    input: numbers.join('; '), 
                    baseCurrency
                };
            }
        } else if (/[+\-*/×÷]/.test(input)) {
            try {
                const normalizedInput = input
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');
                const result = utils.parseAmount(normalizedInput);
                historyEntry = {
                    type: 'calculation',
                    input: input, 
                    result: result.toFixed(2),
                    baseCurrency
                };
            } catch (e) {
                return;
            }
        } else {
            const number = utils.parseAmount(input);
            if (!isNaN(number)) {
                historyEntry = {
                    type: 'single',
                    input: input,
                    baseCurrency
                };
            }
        }
    
        if (historyEntry) {
            const history = this.storage.getHistory();
            const isDuplicate = history.some(item => 
                item.type === historyEntry.type && 
                item.input === historyEntry.input &&
                item.baseCurrency === historyEntry.baseCurrency
            );
    
            if (!isDuplicate) {
                this.storage.addToHistory(historyEntry);
                this.updateHistoryList();
            }
        }
    }

    createCurrencyCard(currencyCode) {
        const card = document.createElement('div');
        card.className = 'currency-card';
        card.dataset.currency = currencyCode;
    
        const isStarred = this.storage.getStarredCurrencies().includes(currencyCode);
        const meta = utils.currencyMeta[currencyCode.toUpperCase()] || { symbol: '', emoji: '' };
        const currencyName = utils.translations[this.currentLanguage]?.currencies?.[currencyCode.toUpperCase()];
        
        card.innerHTML = `
            <div class="card-header">
                <h3 class="currency-code">
                    ${meta.emoji} ${currencyCode.toUpperCase()}
                    ${currencyName ? `<span class="currency-name">${currencyName}</span>` : ''}
                </h3>
                <button class="star-button ${isStarred ? 'starred' : ''}" data-currency="${currencyCode}">
                    <i class="fas ${isStarred ? 'fa-star' : 'fa-regular fa-star'}"></i>
                </button>
            </div>
            <div class="currency-values"></div>
            <div class="rate-change"></div>
        `;

        card.querySelector('.star-button').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleStar(currencyCode);
        });

        return card;
    }

    toggleStar(currencyCode) {
        const starredCurrencies = this.storage.getStarredCurrencies();
        const index = starredCurrencies.indexOf(currencyCode);
        
        if (index === -1) {
            starredCurrencies.push(currencyCode);
        } else {
            starredCurrencies.splice(index, 1);
        }
        
        this.storage.saveStarredCurrencies(starredCurrencies);
        this.updateUI();
    }

    initializeSortable() {
        new Sortable(this.elements.starredList, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            onEnd: (evt) => {
                const starredCurrencies = Array.from(this.elements.starredList.children)
                    .map(card => card.dataset.currency);
                this.storage.saveStarredCurrencies(starredCurrencies);
            }
        });
    }

    updateUI() {
        if (!this.currencyData) return;

        const lastUpdateText = utils.translations[this.currentLanguage].lastUpdated;
        this.elements.updateTime.textContent = `${lastUpdateText} ${utils.formatDate(this.currencyData.date)}`;

        document.title = utils.translations[this.currentLanguage].siteName;
        document.querySelector('.site-description').textContent = 
            utils.translations[this.currentLanguage].siteDescription;

        this.updateBaseCurrencySelect();
        this.updateCurrencyLists();
        this.updateConversions();
        this.updateTranslations();
    }

    updateBaseCurrencySelect() {
        this.elements.baseCurrencySelect.innerHTML = '';
        const currencies = Object.keys(this.currencyData.eur);
        const starredCurrencies = this.storage.getStarredCurrencies();
        
        const starred = starredCurrencies.filter(curr => currencies.includes(curr));
        const unstarred = currencies
            .filter(curr => !starredCurrencies.includes(curr))
            .sort();
        
        [...starred, ...unstarred].forEach(currency => {
            const meta = utils.currencyMeta[currency.toUpperCase()] || { symbol: '', emoji: '' };
            const option = document.createElement('option');
            option.value = currency;
            const starMark = starredCurrencies.includes(currency) ? '⭐ ' : '';
            option.textContent = `${starMark}${meta.emoji} ${currency.toUpperCase()}`;
            this.elements.baseCurrencySelect.appendChild(option);
        });
    }

    updateCurrencyLists() {
        const starredCurrencies = this.storage.getStarredCurrencies();
        
        this.elements.starredList.innerHTML = '';
        starredCurrencies.forEach(currency => {
            this.elements.starredList.appendChild(this.createCurrencyCard(currency));
        });

        this.elements.currencyGrid.innerHTML = '';
        Object.keys(this.currencyData.eur)
            .filter(currency => !starredCurrencies.includes(currency))
            .sort()
            .forEach(currency => {
                this.elements.currencyGrid.appendChild(this.createCurrencyCard(currency));
            });

        this.elements.starredSection.style.display = 
            starredCurrencies.length > 0 ? 'block' : 'none';
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        this.storage.saveTheme(newTheme);
        
        this.elements.themeToggle.innerHTML = `<i class="fas fa-${newTheme === 'dark' ? 'sun' : 'moon'}"></i>`;
    }

    handleLanguageChange(event) {
        this.currentLanguage = event.target.value;
        this.storage.saveLanguage(this.currentLanguage);
        this.updateUI();
    }

    updateTranslations() {
        const t = utils.translations[this.currentLanguage];
        this.elements.searchInput.placeholder = t.searchPlaceholder;
        this.elements.amountInput.placeholder = t.inputPlaceholder;
        document.querySelector('#starred-currencies h2').textContent = t.starredCurrencies;
        document.querySelector('#all-currencies h2').textContent = t.allCurrencies;
    }

    toggleHistory() {
        this.elements.historyPanel.classList.toggle('visible');
        if (this.elements.historyPanel.classList.contains('visible')) {
            this.updateHistoryList();
        }
    }

    updateHistoryList() {
        const history = this.storage.getHistory();
        this.elements.historyList.innerHTML = history.length ? history.map(item => this.createHistoryItem(item)).join('') 
            : '<div class="history-item">No conversion history</div>';
    }

    createHistoryItem(item) {
        let content;
        switch (item.type) {
            case 'calculation':
                content = `${item.input} = ${item.result}`;
                break;
            case 'multiple':
            case 'single':
                content = item.input;
                break;
        }
    
        const safeItem = {
            type: item.type,
            input: item.input,
            baseCurrency: item.baseCurrency
        };
    
        return `
            <div class="history-item" data-id="${item.id}">
                <div class="history-content" style="cursor: pointer" 
                    onclick='app.applyHistory(${JSON.stringify(safeItem)})'>
                    <div>${item.baseCurrency}: ${content}</div>
                    <div class="history-date">${new Date(item.timestamp).toLocaleString()}</div>
                </div>
                <button class="icon-button delete-history" 
                    onclick="event.stopPropagation(); app.deleteHistoryItem(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }

    applyHistory(item) {
        this.elements.baseCurrencySelect.value = item.baseCurrency;
        this.elements.amountInput.value = item.input;
        this.updateConversions(true);
    }

    deleteHistoryItem(id) {
        this.storage.deleteHistoryItem(id);
        this.updateHistoryList();
    }

    clearHistory() {
        if (confirm('Are you sure you want to clear all conversion history?')) {
            this.storage.clearHistory();
            this.updateHistoryList();
        }
    }

    showError(message) {
        console.error(message);
    }
}

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new CurrencyConverter();
});