function solution(s){
    let openCnt = 0
    let closeCnt = 0
    
    let changeArr = s.split('');
    for(let i = 0; i <= changeArr.length; i++){
            if(changeArr[i] === '('){
                openCnt++
            } else if(changeArr[i] === ')'){
                closeCnt++
            }
        }
    
    if(s[0] === ')'){
        return false;
    }
    
    if(changeArr[0] === '(' && changeArr[changeArr.length - 1] === ')' && openCnt === closeCnt){
        return true;
    }else{
        return false;
    }
}