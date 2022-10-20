function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        let multiply = i * x 
        answer.push(multiply)
    }
    return answer;
}