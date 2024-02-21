function solution(s) {
    const sArray = Array.from(s);
    let zeroCnt = 0;
    let delCnt = 1;
    const result = []
    
    let answer = sArray.filter(item => {
        if(item == 0){
           zeroCnt += 1;
        }
        return item == 1;
    })
    
    let bool = true;
    while(bool){
        if(answer.length.toString(2) != 1){
            let changRst = Array.from(answer.length.toString(2));
            answer = changRst.filter(item => {
                if(item == 0){
                   zeroCnt += 1;
                }
                return item == 1;
            })
            delCnt++;
        } else {
            bool = false;
        }
    }
    result.push(delCnt, zeroCnt);
    return result;
}