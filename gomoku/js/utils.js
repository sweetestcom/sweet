const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        const container = document.getElementById('toast-container') || (() => {
            const cont = document.createElement('div');
            cont.id = 'toast-container';
            document.body.appendChild(cont);
            return cont;
        })();
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    container.removeChild(toast);
                }, 300);
            }, 3000);
        }, 100);
    },

    formatMoveNotation(row, col) {
        const letters = 'ABCDEFGHJKLMNOP';
        return `${letters[col]}${15 - row}`;
    },

    parseMove(notation) {
        const letters = 'ABCDEFGHJKLMNOP';
        const col = letters.indexOf(notation[0]);
        const row = 15 - parseInt(notation.slice(1));
        return { row, col };
    },

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    },

    createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const container = document.querySelector('.victory-animation');
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(confetti);
            
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    },

    saveGameStats(stats) {
        localStorage.setItem('gomoku_stats', JSON.stringify(stats));
    },

    loadGameStats() {
        const savedStats = localStorage.getItem('gomoku_stats');
        return savedStats ? JSON.parse(savedStats) : {
            totalGames: 0,
            wins: 0,
            losses: 0,
            draws: 0
        };
    }
};