import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Assignment4Q6 {
	
	 public List<String> convertToUpperCase(List<String> list) {
	        List<String> ToUpper = new ArrayList<>();
	        Consumer<String> consumer = (str)->ToUpper.add(str.toUpperCase());

	        list.stream()
	                .forEach(consumer);

	        return  ToUpper;
	 }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> list = Arrays.asList("alpha", "bravo", "charlie", "delta", "echo", "foxtrot");
        Assignment4Q6 assignment4Q6 = new Assignment4Q6();
        System.out.println(assignment4Q6.convertToUpperCase(list));
	}

}
