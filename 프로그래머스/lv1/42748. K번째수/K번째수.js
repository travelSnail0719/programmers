function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        let num = array.slice(commands[i][0]-1, commands[i][1]);
        num.sort((a,b) => a-b);
        
        console.log(num[commands[i][2]-1])
        answer.push(num[commands[i][2]-1])
    }
    return answer;
}