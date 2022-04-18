package java11;


interface MyInterface{

    // abstract method
    double SI(double principal, double rate, double time);
    
}
public class simpleintrest {
	 public static void main( String[] args ) {
		 
		 MyInterface ref = (p,r,t) -> {
			 double result = (p*r*t)/100;
			 return result;
		 };
		 
		 System.out.println("SI = " + ref.SI(1000,5,3));
	 }
}
