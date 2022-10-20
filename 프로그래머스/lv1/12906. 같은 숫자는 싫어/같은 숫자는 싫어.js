function solution(arr)
{
    var answer = [];
    
    arr.filter((item, idx) => {
        // 해당 순서와 그 다음 순서가 같지 않을 떄 answer배열에 push
        if(arr[idx] !== arr[idx+1]){
            answer.push(arr[idx]);
        }
    });

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    return answer;
}