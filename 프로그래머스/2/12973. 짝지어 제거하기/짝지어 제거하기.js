function solution(s){
//     const arr = Array.from(s);
//     let idx = 0;
    
//     while(idx < arr.length){
//         if(arr[idx] === arr[idx + 1]){
//             arr.splice(idx, 2);
//             idx = 0;
//         } else {
//             idx++;
//         }
//     }

//     return arr.length !== 0 ? 0 : 1
    const arr = Array.from(s);
    let stack = [];
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === stack[stack.length - 1]){
            stack.pop()
        } else {
            stack.push(arr[i])
        }
    }
    return stack.length == 0 ? 1 : 0;
}