function solution(numbers) {
//     var answer = [];
    
//     for(let i = 0; i < numbers.length; i++){
//         for(let j = i + 1; j <= numbers.length; j++){
//             if(numbers[i] < numbers[j]){
//                 answer.push(numbers[j]);
//                 break;
//             } else {
//                 if(numbers[i] >= numbers[j]){
//                     continue;
//                 } else {
//                     answer.push(-1);
//                     break;
//                 }
//             }
//         }
//     }  
//     return answer;
    let stack = [];
    let answer = Array(numbers.length).fill(-1);
    
    for(let i = 0; i < numbers.length; i++) {
        while(stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}