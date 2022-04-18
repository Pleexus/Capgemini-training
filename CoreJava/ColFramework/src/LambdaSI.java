

interface SimpleInterest {
	
	double SI(double P, double R, double T);

}

public class LambdaSI {

    public static void main( String[] args ) {

    // declare a reference to MyInterface
    SimpleInterest ref;
    
    // lambda expression
    ref = (double P, double R, double T) -> {return (P*R*T)/100;};
    
    System.out.println("Simple Interest = " + ref.SI(1000,5,3));
    } 
}