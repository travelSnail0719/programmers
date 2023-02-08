import java.util.Arrays;
import java.util.stream.Stream;

class Solution {
    public int solution(int n) {
        int answer = 0;
        int [] arr = Stream.of(String.valueOf(n).split("")).mapToInt(Integer::parseInt).toArray();
        
        for(int i = 0; i < arr.length; i++){
            answer = answer + arr[i];
        }
        return answer;
    }
}