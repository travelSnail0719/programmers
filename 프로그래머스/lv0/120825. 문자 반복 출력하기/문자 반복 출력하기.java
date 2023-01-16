import java.util.ArrayList;

class Solution {
    public String solution(String my_string, int n) {
        ArrayList<String> answer = new ArrayList<>();
        char [] arr = my_string.toCharArray();
        
        for(int i = 0; i < arr.length; i++){
            for(int j = 0; j < n; j++){
                answer.add(String.valueOf(arr[i]));
            }
        }
        return String.join("", answer);
    }
}