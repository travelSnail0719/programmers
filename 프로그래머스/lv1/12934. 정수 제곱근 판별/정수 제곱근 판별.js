function solution(n) {
    let answer =  Math.sqrt(n)
    
    if(Number.isInteger(answer)){
        return (answer + 1)**2;
    } else{
        return -1;
    }
}