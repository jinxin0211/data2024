// 定義迷宮，1 代表牆壁，0 代表可通行的路徑，2 代表已走過的路徑
var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; // 1,1 代表起點；8,10 代表終點

// 定義點的類別，用於表示迷宮中的位置
class Point {
    constructor(_row, _col) {
        this.row = _row; // 行位置
        this.col = _col; // 列位置
    }
    // 檢查當前點是否是終點
    isEnd() {
        return this.row === end.row && this.col === end.col;
    }
}

// 定義起點和終點
var start = new Point(1, 1); // 起點
var end = new Point(8, 10);  // 終點
var Stack = [];              // 堆疊，用來儲存走過的路徑
var step = start;            // 當前步驟，從起點開始
var rollBack = false;        // 用來標示是否進行回溯

// 定義方向：上、下、左、右
var dir = [
    { x: -1, y: 0 }, // 上
    { x: 1, y: 0 },  // 下
    { x: 0, y: -1 }, // 左
    { x: 0, y: 1 }   // 右
];

// 這個函數是用來開始解迷宮的過程
function go() {
    // 將起點加入堆疊
    Stack.push(step);

    // 開始循環，直到找到終點或沒有路可以走
    while (!step.isEnd()) {
        drawBoard(); // 每一步都會重新繪製迷宮
        MAZE[step.row][step.col] = 2; // 標記當前位置為已走過的路徑（用 2 標記）

        let moved = false; // 用來判斷是否成功移動

        // 隨機排列四個方向
        dir.sort(() => Math.random() - 0.5); // 隨機打亂方向順序

        // 嘗試檢查四個方向，依照隨機打亂的順序移動
        for (let i = 0; i < 4; i++) {
            // 計算下一步的位置
            let newRow = step.row + dir[i].x;
            let newCol = step.col + dir[i].y;

            // 檢查下一個位置是否在迷宮範圍內且是可通行的路徑（0 代表可通行）
            if (MAZE[newRow] && MAZE[newRow][newCol] === 0) {
                // 如果能移動，則更新當前步驟為新的位置，並將此位置加入堆疊
                step = new Point(newRow, newCol);
                Stack.push(step);
                moved = true; // 標記已經成功移動
                break; // 找到可行的路徑後，跳出循環，繼續探索
            }
        }

        // 如果四個方向都無法移動
        if (!moved) {
            // 如果堆疊還有位置，則回溯，彈出上一個位置
            if (Stack.length > 0) {
                step = Stack.pop();
                rollBack = true; // 標記進行回溯
            } else {
                // 如果堆疊已空，表示無解，終止尋路
                console.log("No solution!");
                return;
            }
        }
    }

    // 當找到終點後，顯示成功並繪製路徑
    console.log("Done!");
    drawPath(Stack);
}

// 繪製已走過的路徑
function drawPath(_stack) {
    // 遍歷堆疊中的每一個步驟
    _stack.forEach(item => {
        // 獲取畫布上下文
        var canvas = document.getElementById("map").getContext("2d");
        var size = Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length); // 計算每個格子的大小

        // 設定繪製顏色為紅色
        canvas.fillStyle = "#ff0000";
        // 繪製路徑
        canvas.fillRect(item.col * size, item.row * size, size, size);
    });
}

// 繪製迷宮的當前狀態
function drawBoard() {
    // 獲取畫布上下文
    var canvas = document.getElementById("map").getContext("2d");
    var size = Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length); // 計算每個格子的大小

    // 遍歷迷宮的每一個位置
    for (var _row = 0; _row < MAZE.length; _row++) {
        for (var _col = 0; _col < MAZE[0].length; _col++) {
            // 根據不同的迷宮狀態設置顏色
            if (MAZE[_row][_col] == 1) {
                canvas.fillStyle = "#000000"; // 牆壁顏色
            } else if (MAZE[_row][_col] == 0) {
                canvas.fillStyle = "#ffffff"; // 可通行的路徑顏色
            } else if (MAZE[_row][_col] == 2) {
                canvas.fillStyle = "#ffff00"; // 已走過的路徑顏色
            }
            // 繪製每一個迷宮方格
            canvas.fillRect(_col * size, _row * size, size, size);
            // 為每個方格繪製邊框
            canvas.strokeRect(_col * size, _row * size, size, size);
        }
    }
}

// 呼叫 go 函數開始解迷宮
// go();