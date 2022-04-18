import java.util.Scanner;
import java.util.TreeSet;


public class EmployeeClient {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Sort Manner: \n");
		System.out.println("a:ID \n");
		System.out.println("b:Name  \n");
		System.out.println("c:Department \n");
		System.out.println("d:Salary \n");
		System.out.println("Enter your Choice: \n");
		Scanner sc = new Scanner(System.in);
		char ch = sc.next().charAt(0);    
	    switch(ch)  
	    {  
	        case 'a':   
	        	TreeSet<Employee> set1 = new TreeSet<Employee>(new myIDComparator());
	            
	            set1.add(new Employee(1,"Prajwal", "CSE", 100000));
	            set1.add(new Employee(3,"Dev", "CSE", 20000));
	            set1.add(new Employee(2,"Unni", "ECE", 30000));
	            set1.add(new Employee(5,"Aritro", "EEE", 40000));
	            set1.add(new Employee(4,"Aniket", "EEE", 50000));
	            set1.add(new Employee(6,"Shagun", "MECH", 60000));
	            set1.add(new Employee(7,"Vinayak", "AA", 80000));
	            set1.add(new Employee(8,"Navneet", "AE", 90000));
	            set1.add(new Employee(10,"Aryan", "middleschool", 70000));
	            set1.add(new Employee(9,"L33T", "WE", 69000));
	            
	            System.out.println("increasing Order with the Marks");
	            
	            // Printing the Treeset1 elements
	            for(Employee emp: set1)
	            {
	                System.out.print(emp.getID()+" "+emp.getName()+" "+emp.getDepartment()+" "+emp.getSalary());
	                System.out.println();
	            }
	            break;  
	            
	        case 'b':   
	        	TreeSet<Employee> set2 = new TreeSet<Employee>(new myNameComparator());
	            
	            set2.add(new Employee(1,"Prajwal", "CSE", 100000));
	            set2.add(new Employee(3,"Dev", "CSE", 20000));
	            set2.add(new Employee(2,"Unni", "ECE", 30000));
	            set2.add(new Employee(5,"Aritro", "EEE", 40000));
	            set2.add(new Employee(4,"Aniket", "EEE", 50000));
	            set2.add(new Employee(6,"Shagun", "MECH", 60000));
	            set2.add(new Employee(7,"Vinayak", "AA", 80000));
	            set2.add(new Employee(8,"Navneet", "AE", 90000));
	            set2.add(new Employee(10,"Aryan", "middleschool", 70000));
	            set2.add(new Employee(9,"L33T", "WE", 69000));
	            
	            System.out.println("increasing Order with the Marks");
	            
	            // Printing the Treeset1 elements
	            for(Employee emp: set2)
	            {
	                System.out.print(emp.getID()+" "+emp.getName()+" "+emp.getDepartment()+" "+emp.getSalary());
	                System.out.println();
	            } 
	            break;  
	            
	        case 'c':   
	        	TreeSet<Employee> set3 = new TreeSet<Employee>(new myDepartmentComparator());
	            
	            set3.add(new Employee(1,"Prajwal", "CSE", 100000));
	            set3.add(new Employee(3,"Dev", "CSE", 20000));
	            set3.add(new Employee(2,"Unni", "ECE", 30000));
	            set3.add(new Employee(5,"Aritro", "EEE", 40000));
	            set3.add(new Employee(4,"Aniket", "EEE", 50000));
	            set3.add(new Employee(6,"Shagun", "MECH", 60000));
	            set3.add(new Employee(7,"Vinayak", "AA", 80000));
	            set3.add(new Employee(8,"Navneet", "AE", 90000));
	            set3.add(new Employee(10,"Aryan", "middleschool", 70000));
	            set3.add(new Employee(9,"L33T", "WE", 69000));
	            
	            System.out.println("increasing Order with the Marks");
	            
	            // Printing the Treeset1 elements
	            for(Employee emp: set3)
	            {
	                System.out.print(emp.getID()+" "+emp.getName()+" "+emp.getDepartment()+" "+emp.getSalary());
	                System.out.println();
	            }   
	            break;  
	            
	        case 'd':   
	        	TreeSet<Employee> set4 = new TreeSet<Employee>(new mySalaryComparator());
	            
	            set4.add(new Employee(1,"Prajwal", "CSE", 100000));
	            set4.add(new Employee(3,"Dev", "CSE", 20000));
	            set4.add(new Employee(2,"Unni", "ECE", 30000));
	            set4.add(new Employee(5,"Aritro", "EEE", 40000));
	            set4.add(new Employee(4,"Aniket", "EEE", 50000));
	            set4.add(new Employee(6,"Shagun", "MECH", 60000));
	            set4.add(new Employee(7,"Vinayak", "AA", 80000));
	            set4.add(new Employee(8,"Navneet", "AE", 90000));
	            set4.add(new Employee(10,"Aryan", "middleschool", 70000));
	            set4.add(new Employee(9,"L33T", "WE", 69000));
	            
	            System.out.println("increasing Order with the Marks");
	            
	            // Printing the Treeset1 elements
	            for(Employee emp: set4)
	            {
	                System.out.print(emp.getID()+" "+emp.getName()+" "+emp.getDepartment()+" "+emp.getSalary());
	                System.out.println();
	            }   
	            break;   

	    }
	}
}
