package generic;

import java.util.Arrays;

public class swap<T> {
	
	public T[] swapele(T[] a, int i, int j){
		T temp=a[i];
		a[i]=a[j];
		a[j]=temp;
		return a;
		}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String[] a={"Prajwal","Dev","Unni"};
		swap<String> s1= new swap<>();
		System.out.println("before: "+Arrays.toString(a));
		String[] arr1 = s1.swapele(a,0,2);
		System.out.println("\nafter:"); 
		for(String i : arr1) {
			System.out.println(i);
		}
		

	}

}
