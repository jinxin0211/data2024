const Live = 1;
const Dead = 0;

class Life {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.grid = [];  // 初始化2D陣列
        for (let r = 0; r < this.row; r++) {
            this.grid.push([]);
            for (let c = 0; c < this.col; c++) {
                this.grid[r].push(Dead);
            }
        }
    }

    initialize() {
        this.grid[1][1] = Live;
        this.grid[1][2] = this.grid[1][3] = this.grid[1][4] = Live;
    }

    update() {
        const nextGrid = JSON.parse(JSON.stringify(this.grid));
        for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.col; _col++) {
                const neighbor = this.neighborCount(_row, _col);
                if (this.getStatusAt(_row, _col) == Live && (neighbor <= 1 || neighbor >= 4)) {
                    nextGrid[_row][_col] = Dead;
                } else if (this.getStatusAt(_row, _col) == Dead && neighbor == 3) {
                    nextGrid[_row][_col] = Live;
                }
            }
        }
        this.grid = nextGrid;
    }

    neighborCount(row, col) {
        let count = 0;
        count += this.getStatusAt(row - 1, col - 1);
        count += this.getStatusAt(row - 1, col);
        count += this.getStatusAt(row - 1, col + 1);
        count += this.getStatusAt(row, col - 1);
        count += this.getStatusAt(row, col + 1);
        count += this.getStatusAt(row + 1, col - 1);
        count += this.getStatusAt(row + 1, col);
        count += this.getStatusAt(row + 1, col + 1);
        return count;
    }

    getStatusAt(row, col) {
        if (row < 0 || col < 0 || row >= this.row || col >= this.col) {
            return Dead;
        } else {
            return this.grid[row][col];
        }
    }

    draw(_canvas) {
        const canvas = document.getElementById(_canvas).getContext("2d");
        const size = Math.min(canvas.canvas.height / this.row, canvas.canvas.width / this.col);
        for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.col; _col++) {
                if (this.grid[_row][_col] == Live) {
                    canvas.fillStyle = "#ff0000";
                } else {
                    canvas.fillStyle = "#ffffff";
                }
                canvas.fillRect(_col * size, _row * size, size, size);
                canvas.strokeRect(_col * size, _row * size, size, size);
            }
        }
    }
}

function tonext() {
    myGame.update();
    myGame.draw("map");
}

function mouseClick(event) {
    const _row = Math.floor(event.offsetY / myGame.size);
    const _col = Math.floor(event.offsetX / myGame.size);
    myGame.grid[_row][_col] = (myGame.getStatusAt(_row, _col) == Live) ? Dead : Live;
    myGame.draw("map");
}

const myGame = new Life(10, 10);
myGame.initialize();
myGame.draw("map");