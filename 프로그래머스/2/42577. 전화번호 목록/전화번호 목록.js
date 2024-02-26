function solution(phone_book) {
    let answer = true;
    
    phone_book.sort();
    
    // 효율성 테스트 탈락
    // for(let i = 0; i < phone_book.length; i++){
    //     for(let j = i + 1; j <= phone_book.length - 1; j++){
    //         if(phone_book[j].startsWith(phone_book[i])){
    //             answer = false;
    //             break;
    //         } else {
    //             continue;
    //         }
    //     }
    // }
    // return answer;
    
   const includeYn = phone_book.some((item, idx) => {
        return phone_book[idx + 1]?.startsWith(item)
    })
    return !includeYn;
}