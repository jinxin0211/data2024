
const Live = 1;
const Dead = 0;

class Life{
   constructor(_row, _col){
        this.row = _row;
        this.col = _col;
        this.grid=[];//new Array()
        //2d array
        for(var _row=0;_row < this.row;_row++){
            this.grid.push([]);
            for(var _col=0;_col < this.col;_col++){
                this.grid[_row].push(Dead);
            }
        }
        
    }
    initialize = function(random){
        if(random == true){
            for(var _row=0;_row < this.row;_row++){
                for(var _col=0;_col < this.col;_col++){
                    this.grid[_row][_col] = (Math.random()<0.1) ? Live : Dead;
                }
            }
        }else{
            this.grid[1][1] = Live;
            this.grid[1][2] = this.grid[1][3] = this.grid[1][4] =Live; 
        }
    }

    update = function(){
          var nextGrid = JSON.parse(JSON.stringify(this.grid));
          //travse all elements, count its neighbor
          var neighbor;
          for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.row; _col++) {
                neighbor = this.neighborCount(_row, _col);
                // update by 4 rules
                if(this.getStatusAt(_row,_col)==Live && (neighbor<=1 || neighbor>=4)){
                    nextGrid[_row][_col] = Dead;
                }
                if(this.getStatusAt(_row,_col)==Dead && neighbor==3){
                    nextGrid[_row][_col] = Live;
                }

            }
            
          }

          this.grid = null;
          this.grid = nextGrid;
    } 


    neighborCount = function(row, col){
        var count=0;
        count += this.getStatusAt(row-1, col-1);
        count += this.getStatusAt(row-1, col); 
        count += this.getStatusAt(row-1, col+1); 
        
        count += this.getStatusAt(row, col-1);

        count += this.getStatusAt(row, col+1); 
        
        count += this.getStatusAt(row+1, col-1); 
        count += this.getStatusAt(row+1, col); 
        count += this.getStatusAt(row+1, col+1);      
        return count;   
    }
    getStatusAt = function(row, col){
        if(row<0 || col<0 || row >= this.row || col >= this.col){
           return Dead;
        }else{
            return this.grid[row][col];
        }
    }

    draw = function(_canvas){
        var canvas = document.getElementById(_canvas).getContext("2d");
        this.size=Math.min(canvas.canvas.height/this.row, canvas.canvas.width/this.col);
        for(var _row=0;_row<this.row;_row++){
            for(var _col=0;_col<this.col;_col++){
                //ar2d[_row][_col]=>0,1
                if(this.grid[_row][_col]==Live){
                    canvas.fillStyle="#ff0000"
                }else{
                    canvas.fillStyle="#ffffff"
                }
                //600/5=>120  coordinate x,y , width, heigth
                canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
                canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
            }
        }
    }
    drawPoint = function(_canvas,_row,_col){
        var canvas = document.getElementById(_canvas).getContext("2d");
        //this.size=Math.min(canvas.canvas.height/this.row, canvas.canvas.width/this.col);
        if(this.grid[_row][_col]==Live){
            canvas.fillStyle="#ff0000"
        }else{
            canvas.fillStyle="#ffffff"
        }
        canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
        canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
    }
}



// Life.prototype.update= function(){

// }

function tonext(){
    myGame.update();
    myGame.draw("map")
}

function mouseClick(event){
   var _row = Math.floor(event.offsetY/myGame.size);
   var _col = Math.floor(event.offsetX/myGame.size);
//    if(myGame.getStatusAt(_row,_col)==Live){
//     myGame.grid[_row][_col]=Dead;
//    }else{
//     myGame.grid[_row][_col]=Live;
//    }

   //myGame.grid[_row][_col] = (myGame.getStatusAt(_row,_col)==Live) ? Dead : Live;

   myGame.grid[_row][_col] = Number(!myGame.getStatusAt(_row,_col)); 


   //    if() else ...
//    ()? :
   myGame.drawPoint("map",_row,_col);
}

function random(){
   myGame.initialize(true);
   myGame.draw("map");
}

var myTime;
function run(){
   var step = document.getElementById("step").value;
   myTime = setInterval(tonext, Number(step));
}
function stop(){
    clearInterval(myTime);
}


var myGame = new Life(100,100);
var myGame2 = new Life(100,100);

myGame.initialize();
myGame.draw("map")

var runnng = setTimeout(tonext, 1000);