import java.util.ArrayList;
//var cannot be used with Generic type

public class VarDemo3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// var used with Generic type
		var<Integer> al = new ArrayList<Integer>();
        
        // add elements 
	      al.add(10);
	      al.add(20);
	      al.add(30);
      
      // print the list
      System.out.println(al);
      
        // This is valid since type is decided
        // based on ArrayList<String>
        var list = new ArrayList<String>();
	}

}
