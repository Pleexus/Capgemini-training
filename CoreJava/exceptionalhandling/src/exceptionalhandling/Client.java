package exceptionalhandling;
import java.util.*; 

public class Client {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SavingAccount savingAccount = new SavingAccount();
		Scanner sc=new Scanner(System.in);  
		System.out.println("Account ID : " + savingAccount.id);
        System.out.println("Current balance : " + savingAccount.balance());
        System.out.println("Withdrawing 500");
        savingAccount.withdraw(500);
        System.out.println("Current balance : " + savingAccount.balance());
        savingAccount.withdraw(-1);
 
    }

}

