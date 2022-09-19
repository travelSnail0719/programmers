function solution(s) {
    var answer = [];
    let splitToString;
    // 주어진 문자열을 배열로 변환 후 배열 내에서 오름처순 정렬
    splitToString = s.split(' ').sort((a, b) => a - b);
    // 최솟값과 최대값만 answer에 넣어준다
    answer.push(splitToString[0], splitToString[splitToString.length - 1]);
    // 배열을 문자열로 변환
    return answer.join(' ');
}