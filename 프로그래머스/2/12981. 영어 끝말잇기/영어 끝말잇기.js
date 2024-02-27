function solution(n, words) {
    let answer = [];
//     let obj = {};
    
//     for(let i = 1; i <= n; i++){
//         obj[i] = [];
//     }
    
//     let idx = 1;
//     while(true){
//         let wordsShift = words.shift();
        
//         if(wordsShift === undefined){
//             break;
//         }
//         obj[idx].push(wordsShift);
        
//         if(idx >= n){
//             idx = 1;
//         } else {
//             idx++;
//         }
//     }

    for(let idx = 1; idx < words.length; idx++){
        if(words[idx - 1].charAt(words[idx - 1].length - 1) !== words[idx].charAt(0)){
            return [(idx % n) + 1, Math.floor(idx / n) + 1];
        }
        
        if(words.indexOf(words[idx]) !== idx){
            return [(idx % n) + 1, Math.floor(idx / n) + 1];
        }
    }
    return [0,0];
}