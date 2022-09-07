function solution(N, stages) {
    let answer = [];
    let result = [];

    for(let i = 1; i <= N; i++){
        // 스테이지에 도달한 플레이어 수
        let countOfUser = stages.filter((users) => users >= i).length;
        
        // 스테이지에 도달했으나 아직 클리어하지 못한 플에이어의 수
        let usersStage = stages.filter((users) => users === i).length;
        
        // 스테이지 별 실패율 배열 push
        answer.push([i, usersStage / countOfUser]);
    }
    // 실패율 높은 순으로 정렬
    answer.sort((a, b) => b[1] - a[1]);
    console.log(answer)
    
    // 스테이지만 추출
    answer.forEach((item, idx) => {
        result.push(answer[idx][0]);
    })
    return result;
}