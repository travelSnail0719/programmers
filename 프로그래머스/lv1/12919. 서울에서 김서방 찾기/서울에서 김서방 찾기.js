function solution(seoul) {
    var answer = '';
    seoul.forEach((item, idx) => {
        console.log(item)
        if(item == "Kim"){
            answer = `김서방은 ${idx}에 있다`
        }
    })
    return answer;
}