function solution(nums) {
    let sum = [];
    let result = 0;
    let answer = [];
    nums.sort();

    for(let j = 0; j < nums.length; j++) {
        for(let i = j + 1; i < nums.length; i++) {
            for(let k = i + 1; k < nums.length; k++) {
                sum.push(nums[j] + nums[i] + nums[k]);
            }
        }
    }
    
    sum.forEach(item => {
        result += isPrime(item);
    });
    
    return result;
}

const isPrime = (num) => {
    if(num === 2) {
        return 1;
    }
  
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
        return 0; 
        }
    }
  return 1; 
}