document.addEventListener('DOMContentLoaded', () => {
    const game = new GomokuGame();
    const i18n = new I18n();

    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.innerHTML = isDark ? 
            '<i class="fas fa-moon"></i>' : 
            '<i class="fas fa-sun"></i>';
    });

    // 语言切换
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', (e) => {
        i18n.setLocale(e.target.value);
    });

    // AI设置
    const ai1Select = document.getElementById('ai-1');
    const ai2Select = document.getElementById('ai-2');
    const apiKey1Input = document.getElementById('api-key-1');
    const apiKey2Input = document.getElementById('api-key-2');
    const difficultySelect = document.getElementById('difficulty');

    ai1Select.addEventListener('change', (e) => {
        game.aiManager.setAIService(e.target.value);
    });

    apiKey1Input.addEventListener('change', (e) => {
        game.aiManager.setApiKey(ai1Select.value, e.target.value);
    });

    ai2Select.addEventListener('change', (e) => {
        if (game.gameMode === 'ai-ai') {
            game.aiManager.setAIService(e.target.value);
        }
    });

    apiKey2Input.addEventListener('change', (e) => {
        if (game.gameMode === 'ai-ai') {
            game.aiManager.setApiKey(ai2Select.value, e.target.value);
        }
    });

    difficultySelect.addEventListener('change', (e) => {
        game.aiManager.setDifficulty(e.target.value);
    });

    // 保存API密钥到localStorage
    const saveApiKeys = () => {
        const keys = {
            [ai1Select.value]: apiKey1Input.value,
            [ai2Select.value]: apiKey2Input.value
        };
        localStorage.setItem('gomoku_api_keys', JSON.stringify(keys));
    };

    // 加载保存的API密钥
    const loadApiKeys = () => {
        const savedKeys = localStorage.getItem('gomoku_api_keys');
        if (savedKeys) {
            const keys = JSON.parse(savedKeys);
            apiKey1Input.value = keys[ai1Select.value] || '';
            apiKey2Input.value = keys[ai2Select.value] || '';
            game.aiManager.setApiKey(ai1Select.value, apiKey1Input.value);
            game.aiManager.setApiKey(ai2Select.value, apiKey2Input.value);
        }
    };

    // 保存设置
    window.addEventListener('beforeunload', saveApiKeys);

    // 加载设置
    loadApiKeys();

    // 设置初始语言
    i18n.setLocale(languageSelect.value);
});