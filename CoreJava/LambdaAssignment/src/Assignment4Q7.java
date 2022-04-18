import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;

public class Assignment4Q7 {
	
	public String convertKeyValueToString(HashMap<String, Integer> map) {

        StringBuilder str = new StringBuilder();
        Consumer<Map.Entry> consumer=(p)->str.append(p.getKey()).append(p.getValue());
        Set set  = map.entrySet();
        set.stream()
                .forEach(consumer);



        System.out.println(str);
        return str.toString();


    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<String,Integer> map = new HashMap<>();
        map.put("a",4);
        map.put("b",2);
        map.put("c",3);

        Assignment4Q7 assignment4Q7 = new Assignment4Q7();
        assignment4Q7.convertKeyValueToString(map);
	}

}
