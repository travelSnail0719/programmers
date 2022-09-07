function solution(n, lost, reserve) {
    let answer = [];
    
    let lostSort = lost.sort((a, b) => a - b);
    let reserveSort = reserve.sort((a, b) => a - b);
    
    let cnt = 0;
    
    for(let i = 1; i <= n; i++){
        answer.push(1);
    }
    
    for(let i = 0; i <= n; i++){
        if(lostSort.includes(i) && reserveSort.includes(i)){
            answer[i-1] = 1;
        }else if(lostSort.includes(i)){
            answer[i-1] = answer[i-1] - 1;
        } else if(reserveSort.includes(i)){
            answer[i-1] = answer[i-1] + 1;
        } 
    }
    
    for(let i = 0; i <= answer.length; i++){
        if(answer[i] === 2){
            if(answer[i - 1] === 0){
                answer[i] = answer[i] -1;
                answer[i - 1] = 1;
            } else if(answer[i + 1] === 0){
                answer[i] = answer[i] - 1;
                answer[i + 1] = 1;
            }
        }
    }
    
    answer.forEach((item, idx) => {
        if(answer[idx] != 0){
            cnt++
        }
    });
    
    
    return cnt;
}