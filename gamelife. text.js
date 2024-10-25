const Live = 1;
const Dead = 0;

class Life {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.grid = Array.from({ length: this.row }, () => Array(this.col).fill(Dead));
    }

    initialize() {
        this.grid[1][1] = Live;
        this.grid[1][2] = Live;
        this.grid[1][3] = Live;
        this.grid[1][4] = Live; 
    }

    update() {
        const nextGrid = JSON.parse(JSON.stringify(this.grid));

        for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.col; _col++) {
                const neighbor = this.neighborCount(_row, _col);
                const currentStatus = this.getStatusAt(_row, _col);

                // 根據規則更新狀態
                if (currentStatus === Live && (neighbor <= 1 || neighbor >= 4)) {
                    nextGrid[_row][_col] = Dead;
                }
                if (currentStatus === Dead && neighbor === 3) {
                    nextGrid[_row][_col] = Live;
                }
            }
        }

        this.grid = nextGrid;
    }

    neighborCount(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // 跳過當前單元格
                count += this.getStatusAt(row + i, col + j);
            }
        }
        return count;
    }

    getStatusAt(row, col) {
        if (row < 0 || col < 0 || row >= this.row || col >= this.col) {
            return Dead;
        } else {
            return this.grid[row][col];
        }
    }
}

const myGame = new Life(10, 10);
const myGame2 = new Life(100, 100);

myGame.initialize();
myGame.update();