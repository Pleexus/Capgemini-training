package io.Account;


public class BankAccount {
	int balance;
	

	public BankAccount(int balance) {
		super();
		this.balance = balance;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public void withdraw( int withdrawamount) throws InsufficientFundsException {
		if(withdrawamount<=balance) {
			balance -= withdrawamount;
			setBalance(balance);
		}
		else {
			int newBalance = withdrawamount - balance;
			setBalance(newBalance);
            throw new InsufficientFundsException(newBalance);       
		}
	}
}
