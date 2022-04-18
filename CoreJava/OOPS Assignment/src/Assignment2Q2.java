
import java.util.ArrayList;

public class Assignment2Q2 {
	int salary = 10000;
    public int getSalary(int salary)
    {
        this.salary= salary;
        return salary;

    }    
    
    public int totalEmployeesSalary(ArrayList<Integer> employeeSalaries)
    {
        int totalSal=0;
        for(Integer sal:employeeSalaries)
        {
            totalSal+=sal;
        }
        return totalSal;
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Assignment2Q2 assignment2Q2 = new Assignment2Q2();
		Manager manager = new Manager();
		
		int managersalary = manager.getSalary(assignment2Q2.salary);
		
		Labour labour = new Labour();
		
		int laboursalary = labour.getSalary(assignment2Q2.salary);
		
		ArrayList<Integer> employeeSalaries = new ArrayList<>();
		employeeSalaries.add(managersalary);
		employeeSalaries.add(laboursalary);
		
		
	}

}
    
class Manager extends Assignment2Q2 {
        @Override
        public int getSalary(int salary) {
             int incentive = 5000;
             return salary+incentive;
         }
}

class Labour extends Assignment2Q2 {
        @Override
        public int getSalary(int salary) {
             int overtime = 500;
             return salary+overtime;
         }
}
    
    
