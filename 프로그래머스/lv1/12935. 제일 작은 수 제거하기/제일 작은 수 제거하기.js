function solution(arr) {
    var answer = [];
    
    if(arr.length == 1){
        return answer = [-1]
    } else{
        // Math.min 함수로 가장 작은 문자열을 찾고
        // indexOf 함수로 가장 작은 문자열의 위치를 찾은 다음
        // splice로 가장 작은 문자열을 제거한다.
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
        return answer = arr
    }
    return answer;
}