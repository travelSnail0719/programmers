function solution(s){
    var answer = true;
    let stringToArray = [];
    let checkCntP = 0;
    let checkCntY = 0;
    
    stringToArray = Array.from(s)
    
    for(let i = 0; i < stringToArray.length; i++){
        if(stringToArray[i] == 'p' || stringToArray[i] == 'P'){
             checkCntP = checkCntP + 1
        } else if(stringToArray[i] == 'y' || stringToArray[i] == 'Y'){
            checkCntY = checkCntY + 1
        }
    }
    
    if(checkCntP == checkCntY){
        return true;
    } else{
        return false;
    }
}