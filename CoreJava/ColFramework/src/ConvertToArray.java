import java.util.ArrayList;
import java.util.List;

public class ConvertToArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> al = new ArrayList<String>();
        al.add("A");
        al.add("quick");
        al.add("brown");
        al.add("fox");
        al.add("jumps");
        al.add("over");
        al.add("the");
        al.add("lazy");
        al.add("dog");
  
        String[] arr = new String[al.size()];
        arr = al.toArray(arr);
  
        for (String x : arr)
            System.out.print(x + " ");
	}

}
