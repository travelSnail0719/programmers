function solution(k, tangerine) {
//     let arr = [];
    
//     tangerine.sort((a, b) => a - b);
    
//     tangerine.forEach((item, idx) => {
//         if(tangerine.length > 1){
//             if(item === tangerine[idx + 1]){
//                 arr.push(item, tangerine[idx + 1]);
//             }    
//         } else {
//             arr.push(item);
//         }
//     })
    
//     const sliceArr = arr.slice(0, k);

//     const answer = sliceArr.filter((v, i) => sliceArr.indexOf(v) === i);

//     return answer.length;
    let answer = 0;
    const tangerineCnt = {}
    // 귤의 크기와 갯수를 Object 형태로 구분
    tangerine.forEach((item, idx) => {
        if(tangerineCnt[item] == undefined){
            tangerineCnt[item] = 1;
        } else {
            tangerineCnt[item]++;
        }
    })
    // key 순으로 배열화
    const tangerineArr = Object.entries(tangerineCnt).map(([key,value])=>({key,value}))
    // 갯수가 많은 순으로 정렬
    tangerineArr.sort((a, b) => b.value - a.value);
    
    // 주어진 k값만큼 담을 수 있도록 루프
    for(let i = 0; i < tangerineArr.length; i++){
        if(k - tangerineArr[i].value <= 0){
            answer++
            break;
        } else {
            k -= tangerineArr[i].value;
            answer++;
        }
    }
    return answer;
}