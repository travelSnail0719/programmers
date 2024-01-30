function solution(name, yearning, photo) {
    const answer = [];
    let sum;
    
    for(let i = 0; i < photo.length; i++){
        sum = 0;
        for(let j = 0; j < photo[i].length; j++){
            if(name.includes(photo[i][j])){
                name.forEach((item, idx) => {
                    if(item === photo[i][j]){
                        sum += yearning[idx];
                    }
                })
            }
        }
        answer.push(sum);
    }
    return answer;
}