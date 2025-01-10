class Board {
    constructor() {
        this.size = 15;
        this.board = [];
        this.element = document.getElementById('game-board');
        this.cellSize = 38; // 每个格子的大小
        this.padding = 20; // 棋盘边距
        this.lastMove = null;
        this.sounds = {
            stone: document.getElementById('stone-sound'),
            win: document.getElementById('win-sound'),
            error: document.getElementById('error-sound')
        };
        this.soundEnabled = true;
        this.initialize();
    }

    initialize() {
        // 初始化棋盘数据
        this.board = Array(this.size).fill(null)
            .map(() => Array(this.size).fill(0));
        this.lastMove = null;
        
        // 清空棋盘DOM
        this.element.innerHTML = '';
        
        // 创建棋盘网格容器
        const gridContainer = document.createElement('div');
        gridContainer.className = 'board-grid';
        
        // 创建横线
        for (let i = 0; i < this.size; i++) {
            const line = document.createElement('div');
            line.className = 'board-line horizontal-line';
            line.style.top = `${i * this.cellSize}px`;
            gridContainer.appendChild(line);
        }
        
        // 创建竖线
        for (let i = 0; i < this.size; i++) {
            const line = document.createElement('div');
            line.className = 'board-line vertical-line';
            line.style.left = `${i * this.cellSize}px`;
            gridContainer.appendChild(line);
        }
        
        // 创建交叉点
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const intersection = document.createElement('div');
                intersection.className = 'intersection';
                intersection.dataset.row = row;
                intersection.dataset.col = col;
                intersection.style.left = `${col * this.cellSize}px`;
                intersection.style.top = `${row * this.cellSize}px`;
                gridContainer.appendChild(intersection);
            }
        }

        // 添加天元和星位
        const starPoints = [
            [3, 3], [3, 11],
            [7, 7], // 天元
            [11, 3], [11, 11]
        ];
        
        starPoints.forEach(([row, col]) => {
            const star = document.createElement('div');
            star.className = 'star-point';
            star.style.left = `${col * this.cellSize}px`;
            star.style.top = `${row * this.cellSize}px`;
            gridContainer.appendChild(star);
        });

        this.element.appendChild(gridContainer);
    }

    placeStone(row, col, color) {
        if (!this.isValidMove(row, col)) {
            if (this.soundEnabled) {
                this.sounds.error.play();
            }
            return false;
        }

        // 更新数据
        this.board[row][col] = color === 'black' ? 1 : 2;

        // 移除上一手的标记
        if (this.lastMove) {
            const lastStone = this.element.querySelector(`.stone[data-row="${this.lastMove.row}"][data-col="${this.lastMove.col}"]`);
            if (lastStone) {
                lastStone.classList.remove('last-move');
            }
        }

        // 更新视图
        const stone = document.createElement('div');
        stone.className = `stone ${color}`;
        stone.dataset.row = row;
        stone.dataset.col = col;
        stone.style.left = `${col * this.cellSize}px`;
        stone.style.top = `${row * this.cellSize}px`;
        
        // 添加落子动画
        setTimeout(() => {
            stone.classList.add('placed');
            if (this.soundEnabled) {
                this.sounds.stone.play();
            }
        }, 50);

        this.element.querySelector('.board-grid').appendChild(stone);
        
        // 标记最后一手
        stone.classList.add('last-move');
        this.lastMove = { row, col };

        return true;
    }

    removeStone(row, col) {
        if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
            this.board[row][col] = 0;
            const stone = this.element.querySelector(`.stone[data-row="${row}"][data-col="${col}"]`);
            if (stone) {
                stone.classList.remove('placed');
                setTimeout(() => stone.remove(), 300);
            }
        }
    }

    isValidMove(row, col) {
        return row >= 0 && row < this.size && 
               col >= 0 && col < this.size && 
               this.board[row][col] === 0;
    }

    getState() {
        return this.board;
    }

    getCell(row, col) {
        return this.board[row][col];
    }

    clear() {
        this.initialize();
    }

    toggleSound(enabled) {
        this.soundEnabled = enabled;
    }

    playWinSound() {
        if (this.soundEnabled) {
            this.sounds.win.play();
        }
    }

    highlightWinningStones(stones) {
        stones.forEach(([row, col]) => {
            const stone = this.element.querySelector(`.stone[data-row="${row}"][data-col="${col}"]`);
            if (stone) {
                stone.classList.add('winning');
            }
        });
    }
}