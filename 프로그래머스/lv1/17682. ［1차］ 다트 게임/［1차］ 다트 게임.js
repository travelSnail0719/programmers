function solution(dartResult) {
    let regex = /\d{1,2}[SDT]{1}[#|*]?/g;
    let descomToDart = [];
    let answer;
    
    
    for(let dart of dartResult.match(regex)){
       descomToDart.push(dart);
    }
    console.log(descomToDart)
    
    let first = 0;
    let second = 0;
    let third = 0;
    
    for(let i = 0; i < descomToDart.length; i++){
        if(i == 0){
            if(descomToDart[i].includes('S')){
                if(descomToDart[i].includes('*')){
                    first = (descomToDart[i].split(/[SDT]/)[0] ** 1) * 2
                } else if(descomToDart[i].includes('#')){
                    first = (descomToDart[i].split(/[SDT]/)[0] ** 1) * -1
                } else{
                    first = descomToDart[i].split(/[SDT]/)[0] ** 1
                }
            }
            if(descomToDart[i].includes('D')){
                if(descomToDart[i].includes('*')){
                    first = (descomToDart[i].split(/[SDT]/)[0] ** 2) * 2
                } else if(descomToDart[i].includes('#')){
                    first = (descomToDart[i].split(/[SDT]/)[0] ** 2) * -1
                } else{
                    first = descomToDart[i].split(/[SDT]/)[0] ** 2
                }
            }
            if(descomToDart[i].includes('T')){
                if(descomToDart[i].includes('*')){
                    first = (descomToDart[i].split(/[SDT]/)[0] ** 3) * 2
                } else if(descomToDart[i].includes('#')){
                    first = (descomToDart[i].split(/[SDT]/)[0] ** 3) * -1
                } else{
                    first = descomToDart[i].split(/[SDT]/)[0] ** 3
                }
            }
        }
        if(i == 1){
            if(descomToDart[i].includes('S')){
                if(descomToDart[i].includes('*')){
                    second = (descomToDart[i].split(/[SDT]/)[0] ** 1) * 2
                    first = first * 2
                } else if(descomToDart[i].includes('#')){
                    second = (descomToDart[i].split(/[SDT]/)[0] ** 1) * -1
                } else{
                    second = descomToDart[i].split(/[SDT]/)[0] ** 1    
                }
            }else if(descomToDart[i].includes('D')){
                if(descomToDart[i].includes('*')){
                    second = (descomToDart[i].split(/[SDT]/)[0] ** 2) * 2
                    first * 2
                    first = first * 2
                } else if(descomToDart[i].includes('#')){
                    second = (descomToDart[i].split(/[SDT]/)[0] ** 2) * -1
                } else{
                    second = descomToDart[i].split(/[SDT]/)[0] ** 2
                }
            }else if(descomToDart[i].includes('T')){
                if(descomToDart[i].includes('*')){
                    second = (descomToDart[i].split(/[SDT]/)[0] ** 3) * 2
                    first = first * 2
                } else if(descomToDart[i].includes('#')){
                    second = (descomToDart[i].split(/[SDT]/)[0] ** 3) * -1
                } else{
                    second = descomToDart[i].split(/[SDT]/)[0] ** 3    
                }
            }
        }
        if(i == 2){
            if(descomToDart[i].includes('S')){
                if(descomToDart[i].includes('*')){
                    third = (descomToDart[i].split(/[SDT]/)[0] ** 1) * 2
                    second = second * 2
                } else if(descomToDart[i].includes('#')){
                    third = (descomToDart[i].split(/[SDT]/)[0] ** 1) * -1
                } else{
                    third = descomToDart[i].split(/[SDT]/)[0] ** 1
                }
            }
            if(descomToDart[i].includes('D')){
                if(descomToDart[i].includes('*')){
                    third = (descomToDart[i].split(/[SDT]/)[0] ** 2) * 2
                    second = second * 2
                } else if(descomToDart[i].includes('#')){
                    third = (descomToDart[i].split(/[SDT]/)[0] ** 2) * -1
                } else{
                    third = descomToDart[i].split(/[SDT]/)[0] ** 2
                }
            }
            if(descomToDart[i].includes('T')){
                if(descomToDart[i].includes('*')){
                    third = (descomToDart[i].split(/[SDT]/)[0] ** 3) * 2
                    second = second * 2
                } else if(descomToDart[i].includes('#')){
                    third = (descomToDart[i].split(/[SDT]/)[0] ** 3) * -1
                } else{
                    third = descomToDart[i].split(/[SDT]/)[0] ** 3
                }
            }
        }
    }
    console.log(first, second, third)
    return first + second + third;
}