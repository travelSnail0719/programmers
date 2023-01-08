import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> solution(int n, int[] numlist) {
        List<Integer> answer = new ArrayList();

        for(int i = 0; i < numlist.length; i++) {
            if(numlist[i] % n == 0){
                answer.add(numlist[i]);
            }
        }
        return answer;
    }
}