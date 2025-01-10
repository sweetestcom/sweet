class I18n {
    constructor() {
        this.currentLocale = 'en';
        this.translations = {
            en: {
                playerVsAI: 'Player vs AI',
                aiVsAi: 'AI vs AI',
                difficulty: 'Difficulty',
                easy: 'Easy',
                medium: 'Medium',
                hard: 'Hard',
                newGame: 'New Game',
                gameHistory: 'Game History',
                yourTurn: 'Your Turn',
                aiThinking: 'AI is thinking...',
                blackWins: 'Black Wins!',
                whiteWins: 'White Wins!',
                draw: 'Draw!',
                settings: 'Settings',
                apiKeyPlaceholder: 'Enter your API key',
                invalidMove: 'Invalid move!',
                aiError: 'AI error occurred',
                selectAI: 'Select AI',
                selectAI1: 'First AI',
                selectAI2: 'Second AI',
                undo: 'Undo',
                autoPlay: 'Auto Play',
                gameSettings: 'Game Settings',
                blackPlayer: 'Black',
                whitePlayer: 'White',
                totalGames: 'Total Games',
                winRate: 'Win Rate',
                moveHistory: 'Move History',
                soundOn: 'Sound On',
                soundOff: 'Sound Off',
                victory: 'Victory!',
                defeat: 'Defeat!',
                timeElapsed: 'Time',
                confirmNewGame: 'Start new game?',
                confirmUndo: 'Undo last move?'
            },
            zh: {
                playerVsAI: '玩家对战AI',
                aiVsAi: 'AI对战AI',
                difficulty: '难度',
                easy: '简单',
                medium: '中等',
                hard: '困难',
                newGame: '新游戏',
                gameHistory: '游戏记录',
                yourTurn: '该你下棋',
                aiThinking: 'AI思考中...',
                blackWins: '黑棋胜！',
                whiteWins: '白棋胜！',
                draw: '平局！',
                settings: '设置',
                apiKeyPlaceholder: '输入API密钥',
                invalidMove: '无效的落子！',
                aiError: 'AI出错',
                selectAI: '选择AI',
                selectAI1: '第一个AI',
                selectAI2: '第二个AI',
                undo: '悔棋',
                autoPlay: '自动对弈',
                gameSettings: '游戏设置',
                blackPlayer: '黑棋',
                whitePlayer: '白棋',
                totalGames: '总局数',
                winRate: '胜率',
                moveHistory: '落子记录',
                soundOn: '开启声音',
                soundOff: '关闭声音',
                victory: '胜利！',
                defeat: '失败！',
                timeElapsed: '用时',
                confirmNewGame: '确定开始新游戏？',
                confirmUndo: '确定悔棋？'
            },
            ja: {
                playerVsAI: 'プレイヤーvsAI',
                aiVsAi: 'AI vs AI',
                difficulty: '難易度',
                easy: '簡単',
                medium: '普通',
                hard: '難しい',
                newGame: '新しいゲーム',
                gameHistory: '対局履歴',
                yourTurn: 'あなたの番です',
                aiThinking: 'AI考え中...',
                blackWins: '黒の勝ち！',
                whiteWins: '白の勝ち！',
                draw: '引き分け！',
                settings: '設定',
                apiKeyPlaceholder: 'APIキーを入力',
                invalidMove: '無効な手です！',
                aiError: 'AIエラー',
                selectAI: 'AI選択',
                selectAI1: '1番目のAI',
                selectAI2: '2番目のAI',
                undo: '待った',
                autoPlay: '自動対局',
                gameSettings: 'ゲーム設定',
                blackPlayer: '黒',
                whitePlayer: '白',
                totalGames: '総対局数',
                winRate: '勝率',
                moveHistory: '着手記録',
                soundOn: '音声オン',
                soundOff: '音声オフ',
                victory: '勝利！',
                defeat: '敗北！',
                timeElapsed: '経過時間',
                confirmNewGame: '新しいゲームを始めますか？',
                confirmUndo: '一手戻しますか？'
            }
        };
    }

    setLocale(locale) {
        if (this.translations[locale]) {
            this.currentLocale = locale;
            this.updateUI();
            document.documentElement.setAttribute('lang', locale);
        }
    }

    t(key) {
        return this.translations[this.currentLocale][key] || key;
    }

    updateUI() {
        // 更新所有带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // 更新所有带有data-i18n-placeholder属性的输入框
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
    }
}