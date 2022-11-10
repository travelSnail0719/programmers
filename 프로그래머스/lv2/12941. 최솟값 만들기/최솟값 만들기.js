function solution(A,B){
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    A.forEach((item, idx) => {
        answer += A[idx] * B[idx]
    });

    return answer;
}