function solution(priorities, location) {
    var answer = 0;
    let documents = priorities.map((priority, documentLocation)=> [documentLocation, priority]);
    console.log(documents)
    let whileCondition = false;
    
    while(!whileCondition){
        // 배열의 첫번쨰 요소 가져오기
        let firstElement = documents.shift();
        let print = true;
        for(let i = 0; i < documents.length; i++){
            // 반복문을 통해 비교 시작
            // 꺼내온 값과 나머지 값 비교
            if(firstElement[1] < documents[i][1]){
                print = false;
                break;
            }
        }
        // 꺼내온 값이 더 클경우
        if(print){
            answer += 1;
            // 나의 문서 위치와 꺼내온 값의 위치가 같을 경우 반복문 종료
            if(firstElement[0] === location){
                whileCondition = true;
            }
        // 꺼내온 값이 작을 경우
        }else{
            // 배열에 가장 마지막에 다시 넣어줌
            documents.push(firstElement);
        }
    }
    return answer;
}