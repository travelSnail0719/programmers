function solution(numbers, hand) {
    var answer = [];
    let leftNow = 10;
    let rightNow = 11;
    let leftDistance = 0;
    let rightDistance = 0;
    const numTwo = [[2], [1,3,5], [4,6,8], [7,9,0], [10, 11]];
    const numFive = [[5], [2,4,6,8], [0,1,3,7,9], [10, 11]];
    const numEight = [[8], [5,7,9,0], [4,6,10,11], [2,4,6,10,11], [1,3]];
    const numZero = [[0], [8,10,11], [5,7,9], [2,4,6], [1,3]];

    function cal(left, right, idx){
        if(left > right || (left == right && hand == 'right')){
            answer.push("R");
            rightNow = idx;
        } else if(left < right || (left == right && hand == 'left')){
            answer.push("L");
            leftNow = idx;
        }
    }
        for(let i of numbers){
            if([1,4,7].includes(i)){
                answer.push("L");
                leftNow = i;
            } else if([3,6,9].includes(i)){
                answer.push("R");
                rightNow = i;
            }else{
                if(i == 2){
                numTwo.forEach((j, idx) => {
                    console.log(idx)
                    if(numTwo[idx].includes(leftNow)) leftDistance = idx;
                    if(numTwo[idx].includes(rightNow)) rightDistance = idx;
                });
                    cal(leftDistance, rightDistance, i);
            }else if(i == 5){
                numFive.forEach((j, idx)=>{
                    if(numFive[idx].includes(leftNow)) leftDistance = idx;
                    if(numFive[idx].includes(rightNow)) rightDistance = idx;
                });
                cal(leftDistance, rightDistance, i);
            } else if(i == 8){
                numEight.forEach((j, idx)=>{
                    if(numEight[idx].includes(leftNow)) leftDistance = idx;
                    if(numEight[idx].includes(rightNow)) rightDistance = idx;
                });
                cal(leftDistance, rightDistance, i);
            } else if(i == 0){
                numZero.forEach((j, idx)=>{
                    if(numZero[idx].includes(leftNow)) leftDistance = idx;
                    if(numZero[idx].includes(rightNow)) rightDistance = idx;
                });
                cal(leftDistance, rightDistance, i);
            }
        } 
    }
    return answer.join('');
}