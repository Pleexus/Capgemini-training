import java.util.ArrayList;
import java.util.function.Predicate;

public class Assignment4Q4 {
	public ArrayList<String> removeOddLength(ArrayList<String> employeeList){
		ArrayList<String> list = new ArrayList<>();

        Predicate<String> filterEmp = (p)-> {
            if(Math.floorMod(p.length(),2)==0)
                return  true;
            else
                return false;
        };

        employeeList.stream()
                .filter(filterEmp)
                .forEach(p->list.add(p));

        return  list;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<String> employeeList = new ArrayList<>();
        employeeList.add("Prajwal");
        employeeList.add("Aritro");
        employeeList.add("Himanshu");
        employeeList.add("Hu Tao");
        employeeList.add("Ganyu");

        Assignment4Q4 assignment4Q4 = new Assignment4Q4();
        System.out.println(assignment4Q4.removeOddLength(employeeList));
	}

}
