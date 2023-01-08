import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> solution(int[] num_list) {
        List<Integer> answer = new ArrayList();
        int evenCnt = 0;
        int oddCnt = 0;
        
        for(int i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 == 0){
                oddCnt++;
            } else {
                evenCnt++;
            }
        }
        answer.add(oddCnt);
        answer.add(evenCnt);
        return answer;
    }
}