function solution(a, b) {
    var answer = 0;
    let array = [];
    
    if(a < b){
        for(a; a <= b; a++){
            array.push(a)
        }
       answer = array.reduce((a, b) => a+b)
    }else{
        for(b; b <= a; b++){
            array.push(b)
        }
        answer = array.reduce((a, b) => a+b)
    }
    
    
    return answer;
}