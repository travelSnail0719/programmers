function solution(arr) {
    // 최소공배수는 두수의 곱 / 최대공약수
    let answer = 1;
    for(let i = 0; i < arr.length; i++){
        answer = getLcm(answer, arr[i])
    }
    return answer;
}

// 최대공약수
const getGcd = (num1, num2) => {
  
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    } 
    return num1;
}

// 최소공배수
const getLcm = (num1, num2) => {
    return (num1 * num2) / getGcd(num1, num2);
}
