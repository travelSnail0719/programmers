function solution(brown, yellow) {
    var answer = [];
    let index = 1;
    const sumCnt = brown + yellow;
    
    
    while (index <= sumCnt) {
      if (sumCnt % index === 0) answer.push(index);
      index++;
    }
    
    const half = Math.ceil(answer.length / 2);    

    const firstHalf = answer.splice(0, half);
    const secondHalf = answer.splice(-half);
    
    let result = [];
    
    if(firstHalf.length === secondHalf.length){
        result.push(secondHalf[0], firstHalf[firstHalf.length - 1]);
    } else {
        result.push(firstHalf[firstHalf.length - 1], firstHalf[firstHalf.length - 1]);
    }
    
    let first = 0;
    let second = firstHalf.length - 1;
    
    while(true){
        if((result[0] - 2) * (result[1] - 2) !== yellow){
            first++;
            second--;
            result[0] = secondHalf[first];
            result[1] = firstHalf[second];
        } else {
            break;
        }
    }
    
    return result;
}