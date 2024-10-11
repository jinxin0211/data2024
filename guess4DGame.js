var readline = require("readline-sync");

//Generate 4 digit randomly
var Ans=[0,1,2,3,4,5,6,7,8,9]; //permutation
for(var i=0;i<4;i++){
  var rand = Math.floor(Math.random()*10);
  //swap i, rand
  var temp= Ans[i];
  Ans[i] = Ans[rand];
  Ans[rand] = temp;
}
var gCount=10;
do{
  do{
    var G=readline.questionInt("Please input 4 digits? ");
  }while(String(G).length!=4)
  //}while(G<1000 || G>=10000);
  var Gstr = G.toString();
  //adjuge ?A?B
  var countA=0,countB=0;
  for(var i=0;i<4;i++){//Ans[0]~A[3]
      if(Ans[i] == Gstr[i])
        countA++;
      else if(Ans.includes(parseInt(Gstr[i]))){
        countB++;
      }
      
      // for(var j=0;j<4;j++){//Gstr[0]!Gstr[3]
      //     if(Ans[i]==Gstr[j]){
      //       if(i==j)
      //         countA++;
      //       else 
      //         countB++;
      //     }
      // }

      // if(Ans[i] == Gstr[i])
      //   countA++;
      // else if(Gstr.indexOf(Ans[i]>=0)){
      //   countB++;
      // }
  }
  gCount--;
  console.log("Result: "+countA+"A"+countB+"B");//"${CountA}A${countB}B"
  //Win?
  if(countA==4){
    console.log("You win!");
  }
}while(countA<4 && gCount>0)

if(countA<4)
  console.log("You lose!");