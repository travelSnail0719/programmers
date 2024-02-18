function solution(s) {
    s = s.split('');
    
    const answer = s.map((item, idx) => {
        let lastIdx = s.lastIndexOf(item, idx - 1);
        
        if(idx === 0){
            lastIdx = -1;
        } 
        return lastIdx !== -1 ? idx - lastIdx : -1;
    })
    return answer;
}