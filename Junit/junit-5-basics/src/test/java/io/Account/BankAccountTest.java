package io.Account;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;

import io.MinMaxFinder.MinMaxFinder;

class BankAccountTest {
	BankAccount b1;
	TestInfo testInfo;
	TestReporter testReporter;
	
	@BeforeEach
	void init(TestInfo testInfo, TestReporter testReporter) {
		b1 = new BankAccount(100); 
		this.testInfo = testInfo;
		this.testReporter = testReporter;
		testReporter.publishEntry("Running "+testInfo.getDisplayName()+ " with tags"+ testInfo.getTags());
	}
	
	 @Test
    	public void testWithdraw() throws InsufficientFundsException {
//		b1.setBalance(5000);
		b1.getBalance();
		int withdrawamount = 0; //
        b1.withdraw(withdrawamount);
        int balance = b1.getBalance();
        assertEquals(withdrawamount, balance, "throws InsufficientFundsException if amount>balance");
    }

}
