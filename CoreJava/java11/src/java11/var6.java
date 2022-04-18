package java11;

public class var6 {
	// method1 using var
    // as a return type
	var method1() { return ("Inside Method1"); }
	// method2 using var for a
    // parameter
	 void method2(var a) { System.out.println(a); }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// create an instance
        Demo1 obj = new Demo1();
  
        // call method1
        var res = obj.method1();
  
        // call method2
        obj.method2();
	}

}
