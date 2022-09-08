function solution(n) {
    let answer =  n.toString(3).split('').reverse().join('');
    let result = parseInt(answer, 3)
    return result;
}