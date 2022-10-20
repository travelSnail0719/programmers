function solution(absolutes, signs) {
    let result = [];
    
    for(let j = 0; j < signs.length; j++){
        // signs가 false일 때
        if(signs[j] == false){
        // 음수로 변경 후 배열에 넣어줌
         result.push(-absolutes[j]);
        // signs가 true일 때
        } else{
        // 해당 값 배열에 넣어줌
         result.push(absolutes[j]);
        }
    }
    return result.reduce((a, b) => a + b)
}