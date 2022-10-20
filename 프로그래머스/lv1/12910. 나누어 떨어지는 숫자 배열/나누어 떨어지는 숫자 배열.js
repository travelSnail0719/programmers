function solution(arr, divisor) {
    var answer = [];
    arr.forEach((item, index) => {
        if(arr[index] % divisor === 0){
            answer.push(arr[index]);
        }
    })
    if(answer.length == 0){
        answer.push(-1)
    }
    answer.sort((a, b) => a - b);
    return answer;
}