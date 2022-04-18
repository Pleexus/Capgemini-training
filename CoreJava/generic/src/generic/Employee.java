package generic;


import java.util.HashSet;
import java.util.Set;

public class Employee {
	
	private int Id;
	private String Name;
	private int salary;
	private String Department;
	
	

	public Employee(int id, String name, int salary, String department) {
		super();
		Id = id;
		Name = name;
		this.salary = salary;
		Department = department;
	}
	
	

	public int getId() {
		return Id;
	}


	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}


	public String getDepartment() {
		return Department;
	}

	public void setDepartment(String department) {
		Department = department;
	}
	
	
	@Override
	public String toString() {
		return "Employee [Id=" + Id + ", Name=" + Name + ", salary=" + salary + ", Department=" + Department + "]";
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Set<Employee> employees = new HashSet<>();
        employees.add(new Employee(1, "Prajwal", 10000, "CSE"));
        employees.add(new Employee(2, "Dev", 20000, "CSE"));
        employees.add(new Employee(3, "Unni", 30000, "CSE"));
        
        System.out.println(employees);
		
		 
	}

}
