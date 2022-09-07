function solution(n, arr1, arr2) {
    let answer = [];
        let firstMap = arr1.map((item, idx) => parseInt(arr1[idx]).toString(2).padStart(n, '0'));
        let secondMap = arr2.map((item, idx) => parseInt(arr2[idx]).toString(2).padStart(n, '0'));
        console.log('firstMap', firstMap);
        console.log('secondMap', secondMap);
        let changeFirstMap;
        let changeSecondMap;
        
        
        if(firstMap.join(',').includes(1) && firstMap.join(',').includes(0)){
            changeFirstMap = firstMap.join(',').replace(/0/gi, ' ').replace(/1/gi, '#');
        } 
        if(secondMap.join(',').includes(1) && secondMap.join(',').includes(0)){
            changeSecondMap = secondMap.join(',').replace(/0/gi, ' ').replace(/1/gi, '#');
        }
        console.log(changeFirstMap)
        console.log(changeSecondMap)
        
        let arrFirst = changeFirstMap.split(',');
        let arrSecond = changeSecondMap.split(',');
        let arr = [];
        
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(arrFirst[i].charAt(j) == arrSecond[i].charAt(j)){
                    arr.push(arrFirst[i].charAt(j))
                } else{
                    arr.push('#');
                }
            }
            answer.push(arr.join(''));
            arr = []
        }
        
    
    
        return answer;
    }