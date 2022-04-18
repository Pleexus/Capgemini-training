package io.MinMaxFinder;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestReporter;
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class MinMaxFinderTest {
	
	MinMaxFinder t1;
	TestInfo testInfo;
	TestReporter testReporter;
	
	@BeforeEach
	void init(TestInfo testInfo, TestReporter testReporter) {
		t1 = new MinMaxFinder();
		this.testInfo = testInfo;
		this.testReporter = testReporter;
		testReporter.publishEntry("Running "+testInfo.getDisplayName()+ " with tags"+ testInfo.getTags());
	}

	@Test
	@DisplayName("TestPositive")
	void test1() {
		int[] expected = new int[] {1,690};
		assertArrayEquals(expected, t1.minmax(new int[] {100,1,80,690,200}));
 	}
	
	@Test
	@DisplayName("TestPositiveNegative")
	void test2() {
		int[] expected = new int[] {-690,200};
		assertArrayEquals(expected, t1.minmax(new int[] {-100,1,-80,-690,200}));
 	}
	
	@Test
	@DisplayName("TestNegative")
	void test3() {
		int[] expected = new int[] {-9,-2};
		assertArrayEquals(expected, t1.minmax(new int[] {-9,-8,-3,-2}));
 	}


}
