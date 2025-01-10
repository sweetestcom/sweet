class AIManager {
    constructor() {
        this.difficulty = 'medium';
        this.currentAI = 'openai';
        this.apiKeys = {
            openai: '',
            gemini: '',
            claude: ''
        };
        this.thinking = false;
        this.abortController = null;
        this.cache = new Map();
        this.lastRequestTime = 0;
        this.minRequestInterval = 1000;
        this.debugMode = true;
        this.requestTimeout = 30000; // 30秒超时
        this.cacheMaxSize = 1000; // 最大缓存数量
    }

    setApiKey(service, key) {
        this.apiKeys[service] = key;
    }

    setDifficulty(level) {
        this.difficulty = level;
    }

    setAIService(service) {
        this.currentAI = service;
    }

    async waitForRequestInterval() {
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        if (timeSinceLastRequest < this.minRequestInterval) {
            const waitTime = this.minRequestInterval - timeSinceLastRequest;
            console.log(`Waiting ${waitTime}ms before next request...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        this.lastRequestTime = Date.now();
    }

    generatePrompt(boardState, moveHistory, currentPlayer) {
        const boardString = boardState.map(row => 
            row.map(cell => cell === 0 ? '.' : cell === 1 ? 'B' : 'W').join('')
        ).join('\n');
    
        const moveHistoryString = moveHistory.length > 0 
            ? '\nMove history:\n' + moveHistory
                .map((move, index) => 
                    `${index + 1}. ${move.player}: (${move.row},${move.col})`)
                .join('\n')
            : '\nNo previous moves.';
    
        const difficultyPrompts = {
            easy: `You are a beginner Gomoku AI. Follow these guidelines:
    - Only look for obvious moves and immediate threats
    - Don't calculate more than 1-2 moves ahead
    - Focus mainly on making simple connections
    - Ignore complex strategic considerations
    - It's okay to miss threats and make mistakes
    - Prefer simple, straightforward moves
    - Don't try to create complex patterns
    
    Analysis Steps:
    1. Basic Check
       - Can I win in one move? (sometimes miss this)
       - Is opponent about to win? (often miss this)
       - Can I connect to my stones?
    
    2. Simple Decision
       - Choose the first reasonable move you see
       - Don't spend time calculating variations
       - Ignore most defensive needs`,
    
            medium: `You are a Gomoku AI with intermediate skills. Follow these guidelines:
    - Look for basic tactical opportunities
    - Calculate 2-3 moves ahead
    - Consider obvious threats and defenses
    - Use basic strategic patterns
    - Balance between attack and defense
    - Sometimes miss complex threats
    - Make reasonable but not perfect moves
    
    Analysis Steps:
    1. Tactical Check
       - Look for winning moves
       - Check obvious threats
       - Find basic patterns
    
    2. Simple Strategy
       - Consider center control
       - Look for good connections
       - Basic defensive moves
    
    3. Limited Calculation
       - Think 2-3 moves ahead
       - Consider obvious responses
       - Don't go too deep in analysis`,
    
            hard: `You are a world-class Gomoku (Five in a Row) expert. Analyze the position with the following systematic approach:
    
    1. Threat Analysis (Highest Priority)
       - IMMEDIATE THREATS: Check if either player can win in 1-2 moves
       - FORCED SEQUENCES: Identify any forcing moves that require immediate response
       - POTENTIAL THREATS: Spot positions that could develop into threats in 2-3 moves
    
    2. Pattern Recognition
       - LIVE FOUR: .XXXX. (Instant win next move)
       - FOUR: Blocked XXXX (Needs one move to win)
       - LIVE THREE: .XXX. (Can create Four next move)
       - BLOCKED THREE: Partially blocked XXX
       - DOUBLE THREE: Multiple Three patterns (Very dangerous)
       - TWO: XX patterns with space to develop
    
    3. Defensive Evaluation (Critical)
       - Block opponent's winning moves (Highest priority)
       - Prevent formation of opponent's Live Four
       - Disrupt opponent's Three patterns
       - Control key intersections
       - Maintain defensive flexibility
    
    4. Strategic Position Assessment
       - CENTER CONTROL: Center positions are more valuable
       - SHAPE BUILDING: Create efficient stone formations
       - SPACE MANAGEMENT: Maintain room for expansion
       - INITIATIVE: Moves that force opponent's responses
       - MULTI-PURPOSE MOVES: Serve both attack and defense
    
    5. Future Position Analysis
       - Calculate 4-5 moves ahead
       - Consider opponent's best responses
       - Evaluate resulting positions
       - Identify key strategic points
       - Plan long-term development
    
    6. Move Selection Process
       a) If there are immediate threats:
          - Must respond to opponent's winning threats
          - Take winning moves if available
          - Create forcing moves if possible
    
       b) If no immediate threats:
          - Choose moves that:
            * Build strong shapes
            * Control key points
            * Create multiple threats
            * Limit opponent's options
            * Maintain strategic initiative
    
       c) Consider move order:
          - Which move timing is most effective?
          - Can the move be delayed?
          - What follow-up moves are available?
    
    Remember:
    - DEFENSE IS CRITICAL: One missed threat can lose the game
    - LOOK FOR DUAL-PURPOSE MOVES: Good moves should attack and defend
    - MAINTAIN FLEXIBILITY: Don't commit to fixed patterns too early
    - CONTROL SPACE: Limit opponent's development options
    - THINK AHEAD: Consider future positions and threats`
        };
    
        const basePrompt = `
    Current Board State:
    ${boardString}
    ${moveHistoryString}
    
    You are playing as: ${currentPlayer.toUpperCase()}
    
    ${difficultyPrompts[this.difficulty]}
    
    Output your analysis in this format:
    {
        "thought_process": {
            "immediate_threats": {
                "opponent_threats": ["List urgent threats that must be addressed"],
                "winning_moves": ["List your winning moves if any"],
                "forcing_sequences": ["List moves that force specific responses"]
            },
            "defensive_analysis": {
                "critical_points": ["List points that must be defended"],
                "preventive_moves": ["List moves that prevent opponent's development"]
            },
            "strategic_evaluation": {
                "key_points": ["List strategically important positions"],
                "shape_analysis": ["Evaluate current stone formations"],
                "territory_control": ["Assess board control and influence"]
            },
            "candidate_moves": [
                {
                    "move": {"row": x, "col": y},
                    "evaluation": "Detailed analysis of move's purpose",
                    "attack_value": 0.XX,
                    "defense_value": 0.XX,
                    "strategic_value": 0.XX,
                    "overall_score": 0.XX,
                    "expected_variation": "Predicted sequence of next 3-4 moves"
                }
            ],
            "final_decision": "Explanation of chosen move with comprehensive reasoning"
        },
        "row": selected_row_number,
        "col": selected_column_number
    }
    
    Think carefully and respond only with the JSON format above.`;
    
        return basePrompt.trim();
    }

    async retryOperation(operation, maxRetries = 3) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Request timeout')), this.requestTimeout)
                );
                return await Promise.race([operation(), timeoutPromise]);
            } catch (error) {
                if (i === maxRetries - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
                this.logDebug(`Retry attempt ${i + 1}:`, error);
            }
        }
    }

    async getNextMove(boardState, moveHistory, currentPlayer) {
        if (this.thinking) {
            this.abortController?.abort();
        }

        this.thinking = true;
        this.abortController = new AbortController();

        try {
            await this.waitForRequestInterval();

            const cacheKey = this.getCacheKey(boardState, currentPlayer);
            if (this.cache.has(cacheKey)) {
                const cachedMove = this.cache.get(cacheKey);
                this.logDebug('Using cached move:', cachedMove);
                return cachedMove;
            }

            const prompt = this.generatePrompt(boardState, moveHistory, currentPlayer);
            
            const response = await this.retryOperation(async () => {
                let result;
                switch (this.currentAI) {
                    case 'openai':
                        result = await this.getOpenAIMove(prompt);
                        break;
                    case 'gemini':
                        result = await this.getGeminiMove(prompt);
                        break;
                    case 'claude':
                        result = await this.getClaudeMove(prompt);
                        break;
                    default:
                        throw new Error('Invalid AI service');
                }

                if (!result || typeof result.row !== 'number' || typeof result.col !== 'number') {
                    throw new Error('Invalid move format returned by AI');
                }

                if (result.thought_process) {
                    this.logDebug('AI Thought Process:', result.thought_process);
                }

                return result;
            });

            if (this.validateMove(response, boardState)) {
                this.cache.set(cacheKey, response);
                this.cleanCache();
                return response;
            } else {
                throw new Error('Invalid move returned by AI');
            }
        } catch (error) {
            console.error('AI move error:', error);
            return this.getFallbackMove(boardState);
        } finally {
            this.thinking = false;
            this.abortController = null;
        }
    }

    async getOpenAIMove(prompt) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKeys.openai}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{
                    role: "system",
                    content: "You are AlphaGo analyzing a Gomoku position. Respond with detailed analysis and move selection."
                }, {
                    role: "user",
                    content: prompt
                }],
                temperature: this.getDifficultyTemperature(),
                max_tokens: 1000
            }),
            signal: this.abortController.signal
        });

        const data = await response.json();
        if (!data.choices?.[0]?.message?.content) {
            throw new Error('Invalid response from OpenAI');
        }
        
        return JSON.parse(data.choices[0].message.content);
    }

    async getGeminiMove(prompt) {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1alpha/models/gemini-2.0-flash-exp:generateContent?key=${this.apiKeys.gemini}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: this.getDifficultyTemperature(),
                    maxOutputTokens: 2000
                }
            }),
            signal: this.abortController.signal
        });
    
        const data = await response.json();
        if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
            throw new Error('Invalid response from Gemini');
        }
    
        const responseText = data.candidates[0].content.parts[0].text;
        
        try {
            // 移除 markdown 标记并解析 JSON
            const cleanedText = responseText.replace(/```json\s*|\s*```/g, '');
            const result = JSON.parse(cleanedText);
            
            // 从 final_decision 中获取最终决定的移动
            const finalDecision = result.thought_process?.final_decision;
            if (!finalDecision) {
                throw new Error('No final decision found');
            }
    
            // 从 candidate_moves 中找到对应的移动
            const candidateMoves = result.thought_process?.candidate_moves || [];
            for (const move of candidateMoves) {
                if (finalDecision.includes(`(${move.move.row},${move.move.col})`)) {
                    return {
                        row: move.move.row,
                        col: move.move.col
                    };
                }
            }
    
            throw new Error('Could not find matching move in candidates');
        } catch (error) {
            console.error('Parse error:', error);
            throw new Error('Failed to parse Gemini response');
        }
    }

    async getClaudeMove(prompt) {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKeys.claude,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-sonnet-20240229",
                messages: [{
                    role: "user",
                    content: prompt
                }],
                max_tokens: 1000,
                temperature: this.getDifficultyTemperature()
            }),
            signal: this.abortController.signal
        });

        const data = await response.json();
        if (!data.content?.[0]?.text) {
            throw new Error('Invalid response from Claude');
        }

        return JSON.parse(data.content[0].text);
    }

    getDifficultyTemperature() {
        switch(this.difficulty) {
            case 'easy': return 0.8;
            case 'medium': return 0.5;
            case 'hard': return 0.2;
            default: return 0.5;
        }
    }

    validateMove(move, boardState) {
        if (!this.isValidPosition(move)) return false;
        if (!this.isEmptyPosition(move, boardState)) return false;
        if (this.wouldCreateOverline(move, boardState)) return false;
        return true;
    }

    isValidPosition(move) {
        return move && 
               typeof move.row === 'number' && 
               typeof move.col === 'number' &&
               move.row >= 0 && move.row < 15 &&
               move.col >= 0 && move.col < 15;
    }

    isEmptyPosition(move, boardState) {
        return boardState[move.row][move.col] === 0;
    }

    wouldCreateOverline(move, boardState) {
        const directions = [
            [1, 0], [0, 1], [1, 1], [1, -1] // 水平、垂直、两个对角线
        ];
        
        const tempBoard = boardState.map(row => [...row]);
        tempBoard[move.row][move.col] = 1; // 假设当前玩家是黑棋

        for (const [dx, dy] of directions) {
            let count = 1;
            let x = move.row;
            let y = move.col;

            // 向一个方向数
            while (true) {
                x += dx;
                y += dy;
                if (x < 0 || x >= 15 || y < 0 || y >= 15 || tempBoard[x][y] !== 1) break;
                count++;
            }

            // 向相反方向数
            x = move.row;
            y = move.col;
            while (true) {
                x -= dx;
                y -= dy;
                if (x < 0 || x >= 15 || y < 0 || y >= 15 || tempBoard[x][y] !== 1) break;
                count++;
            }

            if (count > 5) return true;
        }

        return false;
    }

    getFallbackMove(boardState) {
        // 优先尝试中心区域
        const centerStart = 5;
        const centerEnd = 9;
        
        // 先检查中心区域
        for (let row = centerStart; row <= centerEnd; row++) {
            for (let col = centerStart; col <= centerEnd; col++) {
                if (boardState[row][col] === 0) {
                    return { row, col };
                }
            }
        }

        // 如果中心区域没有空位，检查整个棋盘
        for (let row = 0; row < 15; row++) {
            for (let col = 0; col < 15; col++) {
                if (boardState[row][col] === 0) {
                    return { row, col };
                }
            }
        }
        
        return null;
    }

    getCacheKey(boardState, currentPlayer) {
        return boardState.map(row => row.join('')).join('') + currentPlayer;
    }

    cleanCache() {
        if (this.cache.size > this.cacheMaxSize) {
            const entries = Array.from(this.cache.entries());
            const halfSize = Math.floor(this.cacheMaxSize / 2);
            entries.slice(0, halfSize).forEach(([key]) => this.cache.delete(key));
        }
    }

    cleanJsonResponse(text) {
        return text
            .replace(/```json\s*/, '')
            .replace(/```\s*$/, '')
            .replace(/```.*/, '')
            .trim();
    }

    logDebug(message, data) {
        if (this.debugMode) {
            console.group(message);
            console.log(data);
            console.groupEnd();
        }
    }
}