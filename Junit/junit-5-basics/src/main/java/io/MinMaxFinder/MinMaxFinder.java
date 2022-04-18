package io.MinMaxFinder;

public class MinMaxFinder {
	public int[] minmax(int [] array) {
	      int max = array[0];
	      int min = array[0];
	      for(int i=0; i<array.length; i++ ) {
	         if(array[i]>max) {
	            max = array[i];
	         }
	         if(array[i]<min) {
		        min = array[i];
		     }
	      }
	      int newarr[] = {min, max};
	      return newarr;
	   
	}
}
