function solution(x) {
    let splitToX = (x + '').split('');
    let sum;

    sum = splitToX.reduce((a, b) => parseInt(a) + parseInt(b));


    if(x % sum === 0){
        return true;
    } else{
        return false;
    }
}