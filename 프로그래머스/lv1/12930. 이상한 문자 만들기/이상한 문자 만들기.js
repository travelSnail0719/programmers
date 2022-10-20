function solution(s) {
    var answer = '';
    let result;
    
    answer = s.split(" ");
    result =  answer.map((item1) => item1.split("").map((item, idx) => idx % 2 !== 0 ? 
                            item1[idx].toLowerCase() : item1[idx].toUpperCase()).join("")).join(" ")
    return result;
}
