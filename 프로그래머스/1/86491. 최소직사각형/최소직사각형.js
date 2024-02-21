function solution(sizes) {
    const maxEle = [];
    
    // 2차원 배열 값의 크기대로 정렬
    sizes.forEach((item, idx) => {
        sizes[idx].forEach((item2, idx2) => {
            sizes[idx].sort((a, b) => b - a);
         })
        // 정렬된 값 중 두번째 값만 새로 가져옴
        maxEle.push(sizes[idx][1]);
     })
    // 기존 값 중 제일 큰 값
    const cardMaxVlaue = Math.max(...sizes.flat());
    
    // 가로 세로를 모두 수용할 수 있는 두번째 값
    const cardSecondMaxValue = Math.max(...maxEle.flat());
    
    return cardMaxVlaue * cardSecondMaxValue;
}