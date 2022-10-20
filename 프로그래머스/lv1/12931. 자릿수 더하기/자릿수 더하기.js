function solution(n)
{
    var answer = 0;
    let numToArray = (n + '').split('')
    
    answer = numToArray.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    
    return answer;
}