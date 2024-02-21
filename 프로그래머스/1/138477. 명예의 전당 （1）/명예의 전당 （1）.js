function solution(k, score) {
    let stack = [];
    let answer = [];
    
    for(let i = 0; i < score.length; i++){
        stack.push(score[i]);
        stack.sort((a, b) => a - b);
        if(stack.length > k){
            if(score[i] >= stack[0]){
                stack.shift();
            }
        }
        answer.push(stack[0]);
    }
    return answer;
}