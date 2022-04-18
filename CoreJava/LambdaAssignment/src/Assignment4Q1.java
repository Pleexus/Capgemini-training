

interface Operation{
	public  double ArithmeticOperation (int num1,int num2);
}
public class Assignment4Q1 {
	
	public double addition(int num1,int num2){
        Operation add = (int n1,int n2)->  n1+n2;
        return add.ArithmeticOperation(num1,num2);
    }
    public double subtraction(int num1,int num2){
        Operation sub = (int n1,int n2)->  n1-n2;
        return sub.ArithmeticOperation(num1,num2);
    }
    public double multiplication(int num1,int num2){
        Operation mul = (int n1,int n2)->  n1*n2;
        return mul.ArithmeticOperation(num1,num2);
    }
    public double division(int num1,int num2){
        Operation div= (int n1,int n2)->  (double) n1/n2;
        return div.ArithmeticOperation(num1,num2);
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Assignment4Q1 assignment4Q1 = new Assignment4Q1();
        System.out.println(assignment4Q1.addition(10,20));
        System.out.println(assignment4Q1.subtraction(20,10));
        System.out.println(assignment4Q1.multiplication(10,20));
        System.out.println(assignment4Q1.division(20,4));

	}

}
