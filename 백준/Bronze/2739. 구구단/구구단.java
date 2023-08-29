import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int inputNumber;

        Scanner sc = new Scanner(System.in);
        inputNumber = sc.nextInt();
        
        for(int i = 1; i <= 9; i++){
             System.out.println(inputNumber + " * " + i + " = " + (inputNumber * i));
        }
    }
}





