package java11;


//Java program to demonstrate that
//var cannot be used with Lambda
//Expression


interface myInt {
    
    int add(int a, int b);
}
public class var5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		var obj = (a, b) -> (a + b);
		  
        // calling add method
      System.out.println(obj.add(2, 3));
	}

}
