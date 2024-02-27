function solution(numbers) {
    
   const answer = numbers.sort((a, b) => (b.toString() + a.toString()) - (a.toString() + b.toString()))
                         .reduce((a, b) => a.toString() + b.toString())
   
   return answer.startsWith('0') === true ? '0' : answer
}