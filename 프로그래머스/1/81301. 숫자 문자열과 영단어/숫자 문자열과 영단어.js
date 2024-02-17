function solution(s) {
    // 문자열과 index값 맞추기
    const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    // 문자열에 해당 문자열 있으면 index값으로 변환
    numberArr.forEach((item, idx) => {
        s = s.replaceAll(item, idx);
    })
    
    // 숫자타입으로 변환
    return parseInt(s);
}