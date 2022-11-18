function solution(num, k) {
    var answer = num.toString().indexOf(k)
    
    if(answer != -1){
        answer = answer + 1;
    }
    
    return answer;
}