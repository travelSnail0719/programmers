function solution(s, n) {
    let result = [];
    let answer = s.split('')
    let stringToAscii = [];
    let exception;
    
    for(let i = 0; i < answer.length; i++){
        stringToAscii.push(answer[i].charCodeAt())
    }
    
    for(let i = 0; i < stringToAscii.length; i++){
        // 대문자일 경우
        if(stringToAscii[i] >= 65 && stringToAscii[i] <= 90){
            exception = stringToAscii[i] + n;
            if(exception > 90){
                exception = 64 + (exception - 90);
            }
        // 소문자일 경우
        } else if(stringToAscii[i] >= 97 && stringToAscii[i] <= 122){
            exception = stringToAscii[i] + n;
            if(exception > 122){
                exception = 96 + (exception - 122);
            }
        // 공백
        } else {
            exception = stringToAscii[i] + n; 
            if(stringToAscii[i] == 32){
                exception = stringToAscii[i];
            }
        }
        result.push(String.fromCharCode(exception))
    }
    return result.join('');
}