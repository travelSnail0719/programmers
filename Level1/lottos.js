function solution(lottos, win_nums) {
    var answer = [];
    let highLottos = lottos.slice()
    let cnt = 0;
    
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);
    
    // 최고 순위 번호
    for(let i = 0; i <= highLottos.length; i++){
        for(let j = 0; j < win_nums.length; j++){
            if(highLottos[i] == 0){
                highLottos[i] = win_nums[j];
                if(highLottos[i] == win_nums[j]){
                    cnt++
                }
            }else if(highLottos[i] == win_nums[j]){
                cnt++
            }
        }
    }
    console.log('highCnt', cnt);
    switch (cnt){
        case 0 :
        case 1 : answer.push(6)
            break;
        case 2 : answer.push(5);
            break;
        case 3 : answer.push(4);
            break;
        case 4 : answer.push(3);
            break;
        case 5 : answer.push(2);
            break;
        case 6 : answer.push(1);
            break;
    }
    
    cnt = 0;
    
    // 최저 순위 번호
    for(let k = 0; k <= lottos.length; k++){
        for(let f = 0; f < win_nums.length; f++){
            if(lottos[k] == win_nums[f]){
                cnt++
            }
        }
    }
    switch (cnt){
        case 0 :
        case 1 : answer.push(6)
            break;
        case 2 : answer.push(5);
            break;
        case 3 : answer.push(4);
            break;
        case 4 : answer.push(3);
            break;
        case 5 : answer.push(2);
            break;
        case 6 : answer.push(1);
            break;
}
    
    return answer;
}