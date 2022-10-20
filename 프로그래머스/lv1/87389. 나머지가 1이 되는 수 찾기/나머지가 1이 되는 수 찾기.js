function solution(n) {
    var answer = 0;
    let result = [];
    
    for(let i = 1; i <= n; i++){
        if(n % i === 1){
            result.push(i)
        }
    }
    result.sort((a, b) => a - b);
    answer = result[0];
    return answer;
}