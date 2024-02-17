function solution(s, skip, index) {
    const resultArray = [];
    
    // 문자열 배열로 변환
    s = s.split('');
    skip = skip.split('');
    
    // 배열로 변환한 문자열 아스키코드로 변환
    const sArray = s.map(item => item.charCodeAt());
    const skipArray = skip.map(item => item.charCodeAt());
    
    sArray.forEach(item => {
        // index 수만큼 반복
        for(let i = 0; i < index; i++){
            item += 1;
            // item이 z를 넘어갈 경우 다시 처음으로 돌아감;
            if(item > 122){
                item -= 26;
            }
            // item이 skip 목록에 해당하는 것이 있는지 확인
            while(skipArray.includes(item)) {
                item += 1; 
                if (item > 122) {
                    item -= 26;
                }
            }
        }
        // 최종 결과
        resultArray.push(item);
    })
    // 결과로 나온 아스키코드값 문자열로 반환
    const answerArray = resultArray.map(item => String.fromCharCode(item));
    return answerArray.join('');
}