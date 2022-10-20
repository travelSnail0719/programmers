function solution(n) {
    var answer = 0;
    let index = [];
     for(let i = 0; i <=n; i++){
         if(n % i == 0){
             answer = answer + i
         }
     }
    return answer
    // return index.reduce((item, idx) => item + idx)
}