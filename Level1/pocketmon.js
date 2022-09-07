function solution(nums) {

    let pocktmon = nums.filter((item, idx)=> nums.indexOf(item) == idx);

    console.log('pocktmon', pocktmon)
    
    if(pocktmon.length > nums.length / 2){
        return nums.length / 2
    }
    return pocktmon.length;

}