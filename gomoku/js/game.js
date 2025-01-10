class GomokuGame {
    constructor() {
        this.board = new Board();
        this.aiManager = new AIManager();
        this.currentPlayer = 'black'; // black goes first
        this.gameMode = 'player-ai';
        this.moveHistory = [];
        this.isGameOver = false;
        this.i18n = new I18n();
        this.timers = {
            black: 0,
            white: 0
        };
        this.timerInterval = null;
        this.stats = Utils.loadGameStats();
        this.autoPlayInterval = null;
        this.isAutoPlaying = false;

        this.initializeGame();
        this.updateStats();
    }

    initializeGame() {
        this.board.initialize();
        this.currentPlayer = 'black';
        this.moveHistory = [];
        this.isGameOver = false;
        this.resetTimers();
        this.setupEventListeners();
        this.updateStatus();
        this.startTimer();
    }

    resetTimers() {
        this.timers = {
            black: 0,
            white: 0
        };
        this.updateTimerDisplay();
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timers[this.currentPlayer]++;
            this.updateTimerDisplay();
        }, 1000);
    }

    updateTimerDisplay() {
        document.querySelector('.player.black .timer').textContent = 
            Utils.formatTime(this.timers.black);
        document.querySelector('.player.white .timer').textContent = 
            Utils.formatTime(this.timers.white);
    }

    setupEventListeners() {
        // 棋盘点击事件
        document.getElementById('game-board').addEventListener('click', (e) => {
            if (this.isGameOver || this.isAutoPlaying) return;
            
            const intersection = e.target.closest('.intersection');
            if (!intersection) return;

            const row = parseInt(intersection.dataset.row);
            const col = parseInt(intersection.dataset.col);
            
            if (this.gameMode === 'player-ai' && this.currentPlayer === 'black') {
                this.makeMove(row, col);
            }
        });

        // 新游戏按钮
        document.getElementById('new-game').addEventListener('click', () => {
            if (confirm(this.i18n.t('confirmNewGame'))) {
                this.stopAutoPlay();
                this.initializeGame();
            }
        });

        // 悔棋按钮
        document.getElementById('undo').addEventListener('click', () => {
            if (this.isAutoPlaying) return;
            if (confirm(this.i18n.t('confirmUndo'))) {
                this.undoLastMove();
            }
        });

        // 自动对弈按钮
        document.getElementById('auto-play').addEventListener('click', () => {
            if (this.isAutoPlaying) {
                this.stopAutoPlay();
            } else {
                this.startAutoPlay();
            }
        });

        // 游戏模式切换
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (this.isAutoPlaying) return;
                
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.gameMode = e.target.dataset.mode;
                this.initializeGame();
                
                // 显示/隐藏第二个AI设置
                const ai2Settings = document.querySelector('.ai-2-settings');
                ai2Settings.style.display = this.gameMode === 'ai-ai' ? 'block' : 'none';
            });
        });
    }

    async makeMove(row, col) {
        if (this.isGameOver || !this.board.isValidMove(row, col)) {
            Utils.showToast(this.i18n.t('invalidMove'), 'error');
            return false;
        }

        if (this.board.placeStone(row, col, this.currentPlayer)) {
            this.recordMove(row, col);
            
            if (this.checkWin(row, col)) {
                this.handleGameOver(this.currentPlayer);
                return true;
            }

            this.switchPlayer();
            
            if (!this.isGameOver && 
                ((this.gameMode === 'player-ai' && this.currentPlayer === 'white') ||
                 this.gameMode === 'ai-ai')) {
                await this.makeAIMove();
            }

            return true;
        }

        return false;
    }

    async makeAIMove() {
        this.updateStatus('aiThinking');
        document.body.style.cursor = 'wait';

        try {
            const move = await this.aiManager.getNextMove(
                this.board.getState(),
                this.moveHistory,
                this.currentPlayer
            );

            if (move && this.board.isValidMove(move.row, move.col)) {
                setTimeout(() => {
                    this.makeMove(move.row, move.col);
                }, 500); // 添加延迟使AI走棋更自然
            } else {
                throw new Error('Invalid AI move');
            }
        } catch (error) {
            console.error('AI move error:', error);
            Utils.showToast(this.i18n.t('aiError'), 'error');
            this.stopAutoPlay();
        } finally {
            document.body.style.cursor = 'default';
        }
    }

    recordMove(row, col) {
        this.moveHistory.push({
            player: this.currentPlayer,
            row: row,
            col: col
        });
        this.updateMoveHistory();
        document.getElementById('undo').disabled = false;
    }

    undoLastMove() {
        if (this.moveHistory.length === 0 || this.isGameOver) return;

        const lastMove = this.moveHistory.pop();
        this.board.removeStone(lastMove.row, lastMove.col);
        
        if (this.gameMode === 'player-ai' && this.moveHistory.length > 0) {
            // 在玩家对AI模式下，同时撤销AI的最后一步
            const aiLastMove = this.moveHistory.pop();
            this.board.removeStone(aiLastMove.row, aiLastMove.col);
        }

        this.currentPlayer = this.moveHistory.length % 2 === 0 ? 'black' : 'white';
        this.isGameOver = false;
        this.updateStatus();
        this.updateMoveHistory();
        
        document.getElementById('undo').disabled = this.moveHistory.length === 0;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black';
        this.updateStatus();
    }

    checkWin(row, col) {
        const directions = [
            [0, 1],   // 横向
            [1, 0],   // 纵向
            [1, 1],   // 右下对角
            [1, -1]   // 左下对角
        ];

        const currentStone = this.currentPlayer === 'black' ? 1 : 2;
        const winningStones = [];

        return directions.some(([dx, dy]) => {
            let count = 1;
            const stones = [[row, col]];
            
            // 正向检查
            for (let i = 1; i < 5; i++) {
                const newRow = row + dx * i;
                const newCol = col + dy * i;
                if (!this.isValidPosition(newRow, newCol) || 
                    this.board.getCell(newRow, newCol) !== currentStone) {
                    break;
                }
                count++;
                stones.push([newRow, newCol]);
            }
            
            // 反向检查
            for (let i = 1; i < 5; i++) {
                const newRow = row - dx * i;
                const newCol = col - dy * i;
                if (!this.isValidPosition(newRow, newCol) || 
                    this.board.getCell(newRow, newCol) !== currentStone) {
                    break;
                }
                count++;
                stones.push([newRow, newCol]);
            }

            if (count >= 5) {
                winningStones.push(...stones);
                this.board.highlightWinningStones(stones);
                return true;
            }
            return false;
        });
    }

    isValidPosition(row, col) {
        return row >= 0 && row < 15 && col >= 0 && col < 15;
    }

    handleGameOver(winner) {
        this.isGameOver = true;
        this.stopAutoPlay();
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // 更新统计信息
        this.stats.totalGames++;
        if (this.gameMode === 'player-ai') {
            if (winner === 'black') {
                this.stats.wins++;
            } else {
                this.stats.losses++;
            }
        }
        Utils.saveGameStats(this.stats);
        this.updateStats();

        // 显示胜利动画和播放音效
        const status = winner === 'black' ? 'blackWins' : 'whiteWins';
        this.updateStatus(status);
        this.board.playWinSound();
        this.showVictoryAnimation(winner);
    }

    showVictoryAnimation(winner) {
        const victoryAnimation = document.getElementById('victory-animation');
        const victoryText = victoryAnimation.querySelector('.victory-text');
        
        victoryText.textContent = this.i18n.t(winner === 'black' ? 'victory' : 'defeat');
        victoryAnimation.classList.add('show');
        Utils.createConfetti();

        setTimeout(() => {
            victoryAnimation.classList.remove('show');
        }, 5000);
    }

    updateStatus(status = '') {
        const statusElement = document.getElementById('status');
        if (!status) {
            status = this.currentPlayer === 'black' ? 'yourTurn' : 'aiThinking';
        }
        statusElement.textContent = this.i18n.t(status);

        // 更新玩家指示器
        document.querySelector('.player.black').classList.toggle('active', this.currentPlayer === 'black');
        document.querySelector('.player.white').classList.toggle('active', this.currentPlayer === 'white');
    }

    updateMoveHistory() {
        const movesList = document.getElementById('moves-list');
        movesList.innerHTML = '';
        
        this.moveHistory.forEach((move, index) => {
            const moveItem = document.createElement('div');
            moveItem.className = 'move-item';
            moveItem.innerHTML = `
                <span class="move-number">${index + 1}.</span>
                <span class="move-player ${move.player}">${this.i18n.t(move.player + 'Player')}</span>
                <span class="move-position">${Utils.formatMoveNotation(move.row, move.col)}</span>
            `;
            movesList.appendChild(moveItem);
        });

        movesList.scrollTop = movesList.scrollHeight;
    }

    updateStats() {
        document.getElementById('total-games').textContent = this.stats.totalGames;
        const winRate = this.stats.totalGames > 0 
            ? Math.round((this.stats.wins / this.stats.totalGames) * 100) 
            : 0;
        document.getElementById('win-rate').textContent = `${winRate}%`;
    }

    startAutoPlay() {
        this.isAutoPlaying = true;
        document.getElementById('auto-play').classList.add('active');
        if (!this.isGameOver) {
            this.makeAIMove();
        }
    }

    stopAutoPlay() {
        this.isAutoPlaying = false;
        document.getElementById('auto-play').classList.remove('active');
    }
}