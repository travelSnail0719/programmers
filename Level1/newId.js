function solution(new_id) {
    // 1단계
    let answer = new_id.toLowerCase();
    
    // 2단계
    let reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g
    let result;
    if(reg.test(answer)){
        result = answer.replace(reg, "");
    } else{
        result = answer
    }
    
    // 3단계
    let resultToArray = result.split('')
    for(let i = 0; i <= resultToArray.length; i++){
        if(resultToArray[i] == '.' && resultToArray[i] == resultToArray[i+1]){
          resultToArray.splice(i,1)
            i--;
        }
    }
    
    // 4단계
    for(let i = 0; i <= resultToArray.length; i++){
        if(resultToArray[0] == '.'){
            resultToArray.splice(0,1)
        } else if(resultToArray[resultToArray.length - 1] == '.'){
            resultToArray.splice(resultToArray.length - 1, 1)
        }
    }
    
    // 5단계
    if(resultToArray.length ==  0){
        resultToArray.push('a')
    }
    
    // 6단계
    if(resultToArray.length >= 16){
        resultToArray.splice(15)
    }
    for(let i = 0; i <= resultToArray.length; i++){
        if(resultToArray[0] == '.'){
            resultToArray.splice(0,1)
        } else if(resultToArray[resultToArray.length - 1] == '.'){
            resultToArray.splice(resultToArray.length - 1, 1)
        }
    }
    
    // 7단계
    if(resultToArray.length <=2){
        for(let i = resultToArray.length; i < 3; i++){
            resultToArray.splice(resultToArray.length, 0, resultToArray[resultToArray.length - 1])
        }
    }
    return resultToArray.join("");
}