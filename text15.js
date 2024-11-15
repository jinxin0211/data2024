 function bracketMatch(inputString){
    var opening=[];
    var isMatched=true;
    var symbol=inputString.charAt(i=0);
    while(isMatched && symbol!='\n'){
        if(symbol='{'||symbol=='('||symbol=='[')
            opening.push(symbol);
        if(symbol== '}' || symbol ==')' || symbol ==']'){
            if(opening.length==0) isMatched=false;
            else{
                match=opening.pop();
                isMatched=(symbol=='}'&&match=='{')||(symbol==')'&&match=='(')||(symbol==']'&&match=='[');
            }
      
    }
    symbol=inputString.charAt(++i);
 }
 if(opening.length>0||!isMatched)return'unmatched';
 else return'matched';
}

//
function bracketMatch(inputString) {
    // 用來儲存開啟的括號的堆疊
    var opening = [];
    // 記錄是否所有括號都匹配的旗標，預設為 true
    var isMatched = true;
    // 變數 i 記錄當前字元的位置
    var i = 0;
    // 初始 symbol 是字串中的第一個字元
    var symbol = inputString.charAt(i);

    // 當 isMatched 為 true 且字串還有字元時繼續循環
    while (isMatched && i < inputString.length) {
        // 檢查是否為開啟的括號
        if (symbol === '{' || symbol === '(' || symbol === '[') {
            // 將開啟的括號放入堆疊
            opening.push(symbol);
        }
        // 檢查是否為閉合的括號
        if (symbol === '}' || symbol === ')' || symbol === ']') {
            // 如果堆疊為空，代表沒有對應的開括號，則設定為不匹配
            if (opening.length === 0) {
                isMatched = false;
            } else {
                // 取出堆疊頂端的開括號
                var match = opening.pop();
                // 檢查當前的閉括號是否與堆疊頂端的開括號匹配
                isMatched = (symbol === '}' && match === '{') ||
                            (symbol === ')' && match === '(') ||
                            (symbol === ']' && match === '[');
            }
        }
        
        // 移動到下一個字元，更新 symbol
        i++;
        symbol = inputString.charAt(i);
    }

    // 如果堆疊中還有未匹配的開括號，或者在過程中發現不匹配的情況
    if (opening.length > 0 || !isMatched) {
        return 'unmatched';  // 返回「未匹配」
    } else {
        return 'matched';}  // 返回「匹配」
    }