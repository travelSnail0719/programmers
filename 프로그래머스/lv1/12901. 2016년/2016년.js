function solution(a, b) {
    var answer = new Date(`2016-${a}-${b}`).toString().substr(0,3).toUpperCase();
    return answer;
}