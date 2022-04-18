package io.calculator;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.RepetitionInfo;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestReporter;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;


// no need for static if we use TestInstace PER_CLASS 
//as we don't need to create more than 1 instance of the class
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@DisplayName("When running MathUtils")
class mathutilsTest {
	
	mathutils m1; // member variable (cannot be method local var)
	TestInfo testInfo; // java class interface for info of test
	TestReporter testReporter; // java class interface to report the info in console.
	
	// doesn't have instance to run this so we have to define it 
	// as static method as it doesn't need an instance.
	// Applicable for both BeforeAll and AfterAll
	@BeforeAll
	static void beforeallinit() {
		System.out.println("Testing will now start... \n");
	}
	
	//execute init before each method runs
	@BeforeEach
	void init(TestInfo testInfo, TestReporter testReporter) {
		m1 = new mathutils();
		this.testInfo = testInfo;
		this.testReporter = testReporter;
		testReporter.publishEntry("Running "+testInfo.getDisplayName()+ " with tags"+ testInfo.getTags());
	}
	@Nested
	@Tag("Math")
	@DisplayName("Add Method")
	class Addtest{
		@Test
		//displays customized method name for more ease when running.
		@DisplayName("When Adding two positive Method")
		void testAddPositive() {
//			System.out.println("Test has ran");
//			mathutils m1 = new mathutils();
			int expected = 2;
			int actual= m1.add(1, 1);
//			assertEquals(expected, actual);
			assertEquals(expected, actual, "return the right sum");
		}
		@Test
		@DisplayName("When Adding two negative Method")
		void testAddNegative() {

			int expected = -2;
			int actual= m1.add(-1, -1);
			assertEquals(expected, actual, "return the right sum");
			// use lambda to return fail case message if the code inside is expensive.
			//basically code inside() is only executed when test fails!
			//assertEquals(expected, actual, () -> "should return "+ expected+" but returned "+ actual);
		}
		
	}


	@Test
	@Tag("Math")
	@DisplayName("Testing Multiply Method")
	void testMultiply() {
		// passing multiple asserts in one shot.
//		testReporter.publishEntry("Running "+testInfo.getDisplayName()+ " with tags"+ testInfo.getTags());
		assertAll(
					() -> assertEquals(4, m1.Multiply(2, 2)),
					() -> assertEquals(0, m1.Multiply(2, 0)),
					() -> assertEquals(-2, m1.Multiply(2, -1))
				);

	}
	
	@AfterEach
	void cleanup() {
		System.out.println("cleaning up....\n");
	}
	
	@Test
	@Tag("Math")
	//will only run on linux OS
	@EnabledOnOs(OS.WINDOWS)
	void testDivide() {
//		mathutils m1 = new mathutils();
//		division by 0 throws Arithmetic exception so NullPointer will throw error
//		assertThrows(NullPointerException.class, () -> m1.Divide(1, 0), "Divide by zero should throw");
//		boolean isServerup = false;
		// assumes that isServerup is true even if it is false
//		assumeTrue(isServerup);
		assertThrows(ArithmeticException.class, () -> m1.Divide(1, 0), "Divide by zero should throw");
	}
	
	//runs the test 3 times
	@RepeatedTest(3)
	void testComputeCircle(RepetitionInfo repetitionInfo) {
		// gets the total no of repetitions for Repeated test class.
		repetitionInfo.getTotalRepetitions(); 
//		mathutils m1 = new mathutils();
		assertEquals(314.1592653589793, m1.Computecirclearea(10), "Should return circle area");
		
	}
	
	@Test
	//Disabled won't pass the test rather it skips it.
	@Disabled
	@DisplayName("TDD method- should not run")
	void testdisable() {
		fail("this test should disable \n");
	}
	
	@AfterAll
	void end() {
		System.out.println("Testing Completed!\n");
	}

}
