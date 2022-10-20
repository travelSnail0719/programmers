function solution(n) {
    var answer = 0;
    // 숫자열을 문자열 배열로 변경
    let numToArray = (n + '').split('');
    // 배열안에 있는 숫자를 오름차순으로 정렬
    numToArray.sort((a,b) => b - a)
    // 정렬된 배열을 다시 문자열로 변경
    let arrayToNum = numToArray.join('');
    // 문자열을 숫자열로 변경
    answer = parseInt(arrayToNum);
    return answer;
}