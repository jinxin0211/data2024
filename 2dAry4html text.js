var ary2d = [
    [1, 1, 0, 1, 1], // index 0
    [1, 0, 1, 1, 0], // index 1
    [1, 0, 1, 0, 0], // index 2
    [1, 0, 1, 1, 0], // index 3
    [1, 0, 1, 0, 0]  // index 4
];

var row = ary2d.length;
var col = ary2d[0].length;

// Draw map
var canvas = document.getElementById("map").getContext("2d");
var size = 120; // 每個方塊的大小

for (var _row = 0; _row < row; _row++) {
    for (var _col = 0; _col < col; _col++) {
        // ary2d[_row][_col] => 0, 1
        if (ary2d[_row][_col] == 1) {
            canvas.fillStyle = "#0000ff"; // 藍色
        } else {
            canvas.fillStyle = "#000000"; // 黑色
        }
        // 繪製矩形
        canvas.fillRect(_col * size, _row * size, size, size); // 使用 _col 作為 x，_row 作為 y
        canvas.strokeRect(_col * size, _row * size, size, size); // 使用 _col 作為 x，_row 作為 y
    }
}