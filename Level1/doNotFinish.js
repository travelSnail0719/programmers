function solution(participant, completion) {
    var answer = '';
    
    let part = participant.sort();
    console.log("part", part)
    let com = completion.sort();
    console.log("com", com)

    for(let i = 0; i < part.length; i++){
        if(part[i] !== com[i]){
            return part[i];
        }
    }
    return part;
}