function solution(citations) {
    let arr = [];
    let answer = 0;
    
    citations.sort((a, b) => b - a);
    
    for(let i = 0; i < citations.length; i++){
        arr.push(citations[i]);
        
        if(citations[i] < arr.length){
            break;
        }
        answer++;
    }
    return answer;
}