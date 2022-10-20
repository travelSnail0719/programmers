function solution(d, budget) {
    let answer = 0;
    // 정렬
    let sortArr = d.sort((a, b) => a - b);
    
    // 배열 요소의 총 합이 주어진 예산과 같으면 배열 길이 리턴
    if(d.reduce((acc, cur) => acc + cur) == budget){
        return d.length
    }else {
        // 배열의 총 합과 주어진 예산이 다를 경우 반복문 돌림
        for(let i = 0; i <= sortArr.length; i++){
            // 주어진 예산에서 정렬된 배열의 i번째 요소를 뺀다
            budget = budget - sortArr[i];
            // 차감한 예산이 0이랑 같거나 클 경우 지원 부서 수 증가
            if(budget >= 0) {
                answer++;
            // 예산이 -가 될 경우 지원 종료
            }else {
                break;
            }
        }
    }

    return answer;
}