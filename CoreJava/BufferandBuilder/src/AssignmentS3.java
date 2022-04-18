
public class AssignmentS3 {
	public static void main(String[] args) {
		
		String str = "Java String pool refers to collection of Strings which are stored in heap memory";
		
		String str1 = str.toLowerCase();
		System.out.println(str1);
		
		String str2 = str.toUpperCase();
		System.out.println(str2);
		
		String str3 = str.replace('a','$'); 
		System.out.println(str3);
		
		System.out.println(str.contains("collection"));
		
		System.out.println(str.equals("java string pool refers to collection of strings which are stored in heap memory")); 
		
		System.out.println(str.equalsIgnoreCase("java string pool refers to collection of strings which are stored in heap memory")); 
		

	}

}
