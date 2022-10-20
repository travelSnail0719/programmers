function solution(a, b) {
    let answer = [];
    let sum;
    for(let i = 0; i < a.length; i++){
        answer.push(a[i] * b[i]);
    }
    answer.reduce((acc, cur) => {
        return sum = acc + cur
    });
    return sum
}