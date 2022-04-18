import java.util.Comparator;

public class Employee {

	int ID;
	String Name;
	String Department;
	int Salary;
	public Employee(int iD, String name, String department, int salary) {
		super();
		ID = iD;
		Name = name;
		Department = department;
		Salary = salary;
	}
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDepartment() {
		return Department;
	}
	public void setDepartment(String department) {
		Department = department;
	}
	public int getSalary() {
		return Salary;
	}
	public void setSalary(int salary) {
		Salary = salary;
	}
}
	
class myIDComparator implements Comparator<Employee>
{
	   
	    public int compare(Employee e1, Employee e2)
	    {
	        return e1.getID()-e2.getID();
	    }
}
	 
class myNameComparator implements Comparator<Employee>
{
	    public int compare(Employee e1, Employee e2)
	    {
	        return e1.getName().compareTo(e2.getName());
	    }
}

class myDepartmentComparator implements Comparator<Employee>
{
	    public int compare(Employee e1, Employee e2)
	    {
	        return e1.getDepartment().compareTo(e2.getDepartment());
	    }
}

class mySalaryComparator implements Comparator<Employee>
{
	   
	    public int compare(Employee e1, Employee e2)
	    {
	        return e1.getSalary()-e2.getSalary();
	    }
}


