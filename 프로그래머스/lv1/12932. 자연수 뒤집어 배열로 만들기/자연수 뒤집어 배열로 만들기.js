function solution(n) {
    var answer = [];
    
    // 숫자를 문자열로 변환
    let numToString = (n + '').split('')
    // 변환한 문자열을 역순으로 reverse
    numToString.reverse()
    // 배열에 담긴 문자열을 다시 숫자로 변환
    answer = numToString.map((x) => parseInt(x))
    
    return answer;
}