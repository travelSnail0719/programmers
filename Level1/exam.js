function solution(answers) {
    let answer = [];
    let noOne = [1,2,3,4,5];
    let noTwo = [2,1,2,3,2,4,2,5];
    let noThree = [3,3,1,1,2,2,4,4,5,5];
    let examCount = [0, 0, 0]
    
    answers.forEach((item, idx) => {
        if(answers[idx] === noOne[idx % noOne.length]){
            examCount[0] = examCount[0] + 1
        }
        if(answers[idx] === noTwo[idx % noTwo.length]){
            examCount[1] = examCount[1] + 1
        }
        if(answers[idx] === noThree[idx % noThree.length]){
            examCount[2] = examCount[2] + 1
        }
    })
    
  const maxScore = Math.max(...examCount);
  for (let i = 0; i < 3; i++) {
    if (examCount[i] === maxScore) {
        answer.push(i + 1);
      }
  }
  return answer;
}