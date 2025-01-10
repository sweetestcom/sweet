class StorageManager {
    constructor() {
        this.KEYS = {
            CURRENCY_DATA: 'currencyData',
            STARRED_CURRENCIES: 'starredCurrencies',
            LANGUAGE: 'language',
            THEME: 'theme',
            HISTORY: 'conversionHistory'
        };
    }

    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Storage save error:', e);
            return false;
        }
    }

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage get error:', e);
            return defaultValue;
        }
    }

    getCurrencyData() {
        return this.get(this.KEYS.CURRENCY_DATA);
    }

    saveCurrencyData(data) {
        return this.save(this.KEYS.CURRENCY_DATA, {
            data: data,
            timestamp: Date.now(),
            date: data.date
        });
    }

    getStarredCurrencies() {
        return this.get(this.KEYS.STARRED_CURRENCIES, []);
    }

    saveStarredCurrencies(currencies) {
        return this.save(this.KEYS.STARRED_CURRENCIES, currencies);
    }

    getLanguage() {
        return this.get(this.KEYS.LANGUAGE, 'en');
    }

    saveLanguage(lang) {
        return this.save(this.KEYS.LANGUAGE, lang);
    }

    getTheme() {
        return this.get(this.KEYS.THEME, 'light');
    }

    getHistory() {
        return this.get(this.KEYS.HISTORY, []);
    }

    addToHistory(entry) {
        const history = this.getHistory();
        history.unshift({
            ...entry,
            id: Date.now(),
            timestamp: new Date().toISOString()
        });
        
        if (history.length > 100) {
            history.pop();
        }
        
        this.save(this.KEYS.HISTORY, history);
    }

    deleteHistoryItem(id) {
        const history = this.getHistory();
        const filtered = history.filter(item => item.id !== id);
        this.save(this.KEYS.HISTORY, filtered);
    }

    clearHistory() {
        this.save(this.KEYS.HISTORY, []);
    }

    saveTheme(theme) {
        return this.save(this.KEYS.THEME, theme);
    }

    isDataExpired() {
        const data = this.getCurrencyData();
        if (!data) return true;

        const now = Date.now();
        const thirtyMinutes = 30 * 60 * 1000;
        return (now - data.timestamp) > thirtyMinutes;
    }
}