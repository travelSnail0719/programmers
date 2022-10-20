function solution(left, right) {
    let answer = 0;
    let count = [];
    let result = [];
    
    for(left; left <= right; left++){
        for(answer; answer <= left; answer++){
            // left의 약수를 구해서 count에 push
            if(left % answer === 0){
                count.push(answer);
            }
        }
        // left의 약수가 들어간 배열을 통해 약수의 개수 파악
        if(count.length % 2 != 0){
            // 약수의 갯수가 홀수이면 음수로 변경
            result.push(left * -1);
            } else{
            result.push(left);
            }
        answer = 0;
        // 배열 초기화를 통해 length값 초기화
        count = [];
    }
    // console.log(result)
    return result.reduce((a,b) => a+b);
}