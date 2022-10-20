function solution(numbers) {
    let answer = [];
    let getNum = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            getNum.push(sum);
        }
    }
    answer = getNum.filter((t, idx) => getNum.indexOf(t) === idx)
    answer.sort((a, b) => a - b);
    return answer;
}