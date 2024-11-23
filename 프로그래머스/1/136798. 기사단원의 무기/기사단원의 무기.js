function solution(number, limit, power) {
    const first = [];
    let result = 0;
    
    for(let i = 1; i <= number; i++){
        let cnt = 0;
        for(let j = 1; j * j <= i; j++){
            if(i % j === 0){
               cnt++; 
                if(j !== i / j){
                    cnt++;
                }
            }
        }
        first.push(cnt);
    }
    
    first.forEach(item => {
        if(item > limit){
            item = power;
        }
        result += item;
    });
    return result;
}