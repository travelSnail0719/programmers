function solution(s) {
    let answer = '';
    answer = s.split('').sort((a, b) => a < b ? 1 : -1).join("")
    return answer;
}