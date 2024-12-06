function hanoiIterative(n, p1, p2, p3) {
    let stack = [];
    let moves = [];
    let totalMoves = Math.pow(2, n) - 1; // 總移動次數

    // 將所有步驟記錄進棧
    stack.push({ n: n, from: p1, to: p3, aux: p2 });

    while (stack.length > 0) {
        let task = stack.pop();
        let { n, from, to, aux } = task;

        if (n === 1) {
            // 基本情況：直接移動一個盤子
            moves.push(`${n}套環從 ${from} 移到 ${to}`);
        } else {
            // 將遞迴分解成迭代形式
            stack.push({ n: n - 1, from: aux, to: to, aux: from }); // 移動小盤到目標
            stack.push({ n: 1, from: from, to: to, aux: aux });     // 移動最大盤
            stack.push({ n: n - 1, from: from, to: aux, aux: to }); // 移動小盤到輔助
        }
    }

    // 輸出移動步驟
    for (let move of moves) {
        console.log(move);
    }
}

// 測試
hanoiIterative(4, "P1", "P2", "P3");
