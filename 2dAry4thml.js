var ary2d=[
    [1,1,0,1,1], //index 0
    [1,0,1,1,0], //index 1
    [1,0,1,0,0], //index 2
    [1,0,1,1,0], //index 3
    [1,0,1,0,0]   //index 4
];

var row=ary2d.length;
var col=ary2d[0].length;

//draw map
var canvas = document.getElementById("map").getContext("2d");
//var size=canvas.width/row
for(var _row=0;_row<row;_row++){
    for(var _col=0;_col<col;_col++){
        //ar2d[_row][_col]=>0,1
        if(ary2d[_row][_col]==1){
            canvas.fillStyle="#0000ff"
        }else{
            canvas.fillStyle="#000000"
        }
        //600/5=>120  coordinate, width, heigth
        canvas.fillRect(_row*120,_col*120,120,120);
        canvas.strokeRect(_row*120,_col*120,120,120);
    }
}