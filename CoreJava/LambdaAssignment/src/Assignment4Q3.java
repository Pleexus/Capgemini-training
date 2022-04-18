import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

public class Assignment4Q3 {
	
	 static void modifyValue(int v, Function<Integer, Integer> function){
		    int result = function.apply(v);
		    System.out.println(result);
	 	}
	    static class Product {
	    	private double price = 0.0;

	    	  public void setPrice(double price) {
	    	    this.price = price;
	    	  }

	    	  public void printPrice() {
	    	    System.out.println(price);
	    	  }
	    	
	    }
	    static void display(Supplier<Integer> arg) {
	        System.out.println(arg.get());
	    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 5;
	    modifyValue(n, val-> val + 10);
	    modifyValue(n, val-> val * 100);
	    Consumer<Product> updatePrice = p -> p.setPrice(5.9);
	    Product p = new Product();
	    updatePrice.accept(p);
	    p.printPrice();
	    display(() -> n + 10);
        display(() -> n + 100);
	}

}
