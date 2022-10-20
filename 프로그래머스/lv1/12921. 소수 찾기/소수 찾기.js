function solution(n) {
        let answer = 0;
    
    let stroage = new Set();
    for(let i = 0; i <=n; i++){
        stroage.add(i)
    }

    for(let j = 2; j <= Math.sqrt(n); j++){
        if(stroage.has(j)){
            for(let k = j * 2; k <= n; k += j){
                stroage.delete(k)
            }
        }
    }
return stroage.size-2;
}
