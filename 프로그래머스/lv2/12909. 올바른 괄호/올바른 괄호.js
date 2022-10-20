function solution(s){
    let a = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            a.push(s[i]);
        } else{
            a.pop(s[i])
        }
    }

    if(s[0] == ')'){
        return false;
    }

    if(a.length === 0){
        return true;
    }else{
        return false;
    }
}