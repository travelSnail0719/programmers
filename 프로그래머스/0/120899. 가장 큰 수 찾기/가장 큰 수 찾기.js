function solution(array) {
    let answer = [...array]
    answer.sort((a, b) => a - b);
    
    let result = [];
    
    result.push(answer[answer.length - 1]);
    result.push(array.indexOf(result[0]));
    
    return result;
}