function solution(food) {
    let answer = [];
    let val = 0;
    
    // 1번음식부터 순서대로 정렬
    food.forEach(item => {
        let arrLength = Math.floor(item / 2);
        for(let i = 1; i <= arrLength; i++){
            answer.push(val);
        }
        val++;
    })
    // 1번 음식부터 정렬 + 물 + 반대순서로 정렬된 음식 join
    return [...answer, 0, ...answer.reverse()].join('');
}