function solution(id_list, report, k) {
    var answer = [];
    let idObj = {};
    let idObj2 = {};
    // 중복제거
    let removeSame = [...new Set(report)];

    // 신고당한 목록
    removeSame.forEach(item => {
        item = item.split(' ');
        idObj[item[1]] = idObj[item[1]] ? idObj[item[1]] + 1 : 1;
    });
    
    // 신고한 목록
    removeSame.forEach(item => {
        item = item.split(' ');
        if(idObj2[item[0]]){
            idObj2[item[0]] = idObj2[item[0]] + ' ' + item[1]
        } else{
            idObj2[item[0]] = item[1]
        }
    });
    
    return id_list.map(e => {
        if(!idObj2[e]) return 0;
        
        let key = idObj2[e].split(' ')
        return key.filter(e => {
            if(idObj[e] >= k){
                return true;
            } else{
                return false;
            }
        }).length;
    })
}