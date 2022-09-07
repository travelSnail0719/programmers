// 홀짝 구하기
function solution(num) {
    var answer = '';
    if(num % 2 === 0){
        answer = "Even"
    } else{
        answer = "Odd"
    }
    return answer;
}