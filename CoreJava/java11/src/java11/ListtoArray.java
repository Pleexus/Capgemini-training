package java11;

import java.util.Arrays;
import java.util.List;

public class ListtoArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> list = List.of("A", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog");
        
        System.out.println("List to Array example in Java 11:");
        
        // old method
        String[] array1 = list.toArray(new String[list.size()]);
        System.out.println(Arrays.toString(array1));
        
        // new method
        String[] array2 = list.toArray(String[]::new);
        System.out.println(Arrays.toString(array2));
	}

}
