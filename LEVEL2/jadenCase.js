function solution(s) {
    var answer = [];
    
    let stringToArray = s.split(' ');
    
    stringToArray.forEach((item, idx) => {
        let first = stringToArray[idx].charAt(0).toUpperCase();
        let others = stringToArray[idx].slice(1).toLowerCase();
        answer.push(first + others);   
    })
    
    return answer.join(' ');
}