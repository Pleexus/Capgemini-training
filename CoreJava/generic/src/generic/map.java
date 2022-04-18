package generic;

import java.util.Arrays;
import java.util.List;

public class map {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> intList = Arrays.asList(12, 60, 80, 30);
		printElements(intList);
		
		List<Double> doubleList = Arrays.asList(10.12, 110.8, 13.2, 12.70);
		printElements(doubleList);
	}
	
	private static void printElements(List<?> list) {
		for (Object element : list) {
			System.out.println(element);
		}
	}

}
