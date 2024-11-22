var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; // 1代表牆壁，0代表可走路

// 定義起點和終點
class Point {
  constructor(_row, _col) {
    this.row = _row;
    this.col = _col;
  }

  // 檢查是否是終點
  isEnd() {
    return this.row == end.row && this.col == end.col;
  }
}

var start = new Point(1, 1);  // 起點 {row:1, col:1}
var end = new Point(8, 10);   // 終點 {row:8, col:10}
var Stack = [];               // 存儲路徑的堆疊
var step = start;             // 當前位置

// 解迷宮的主要函數
function go() {
  Stack.push(step);  // 將起點加入堆疊
  MAZE[step.row][step.col] = 2;  // 標記起點為已訪問
  
  // 開始遍歷直到找到終點
  while (!step.isEnd()) {
    // 向上移動（如果可行）
    if (step.row > 0 && MAZE[step.row - 1][step.col] == 0) {
      step = new Point(step.row - 1, step.col);  // 向上移動
      MAZE[step.row][step.col] = 2;  // 標記為已訪問
      Stack.push(step);  // 將新位置推入堆疊
    } 
    // 向下移動（如果可行）
    else if (step.row < MAZE.length - 1 && MAZE[step.row + 1][step.col] == 0) {
      step = new Point(step.row + 1, step.col);  // 向下移動
      MAZE[step.row][step.col] = 2;  // 標記為已訪問
      Stack.push(step);  // 將新位置推入堆疊
    }
    // 向左移動（如果可行）
    else if (step.col > 0 && MAZE[step.row][step.col - 1] == 0) {
      step = new Point(step.row, step.col - 1);  // 向左移動
      MAZE[step.row][step.col] = 2;  // 標記為已訪問
      Stack.push(step);  // 將新位置推入堆疊
    }
    // 向右移動（如果可行）
    else if (step.col < MAZE[0].length - 1 && MAZE[step.row][step.col + 1] == 0) {
      step = new Point(step.row, step.col + 1);  // 向右移動
      MAZE[step.row][step.col] = 2;  // 標記為已訪問
      Stack.push(step);  // 將新位置推入堆疊
    } 
    // 如果所有方向都無法移動，則回溯
    else {
      if (Stack.length > 0) {
        step = Stack.pop();  // 從堆疊中彈出上一個有效位置
      } else {
        console.log("No solution!");  // 如果堆疊為空，表示無解
        return;
      }
    }
  }

  // 如果找到了終點，輸出解決方案
  console.log("Done!");
  console.log("Path:", Stack);  // 輸出從起點到終點的路徑
}

// 呼叫go()函數來解決迷宮
go();