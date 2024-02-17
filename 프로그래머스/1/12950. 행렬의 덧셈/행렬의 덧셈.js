function solution(arr1, arr2) {
    let answer = arr1;
    
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j <= arr1[i].length; j++){
            if(arr1[i][j] != null && arr2[i][j] != null){
                answer[i][j] = arr1[i][j] + arr2[i][j]
            }    
        }
    }
    return answer;
}
