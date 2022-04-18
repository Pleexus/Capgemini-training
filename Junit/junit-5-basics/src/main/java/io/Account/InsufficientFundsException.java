package io.Account;

public class InsufficientFundsException extends Exception {
	int amount;

	public InsufficientFundsException(int amount) {
		super();
		this.amount = amount;
	}

	public int getAmount() {
		return amount;
	}
	

}
