function solution(n) {
    var answer = 0;
    const targetVal = n.toString(2);
    let targetCnt = 0;
    let comparisonCnt = 0;
    
    Array.from(targetVal).forEach(item => {
        if(item == 1){
            targetCnt++;
        }
    })
    
    let nextN = n + 1;
    
    for(nextN; nextN <= 1000000; nextN++){
        let comparisonVal = nextN.toString(2);
        
        Array.from(comparisonVal).forEach(item => {
            if(item == 1){
                comparisonCnt++;
            }
        })
        if(comparisonCnt == targetCnt){
            answer = nextN;
            break;
        }
        comparisonCnt = 0;
    }
    return answer;
}