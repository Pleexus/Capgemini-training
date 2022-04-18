import java.util.TreeSet;

public class ProductClient {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TreeSet<Product> products=new TreeSet<Product>();  
	    //Creating products  
	    products.add(new Product(1,"Coke")) ;  
	    products.add(new Product(2,"Pasta")) ;
	    products.add(new Product(4,"Spagetti")) ;
	    products.add(new Product(3,"Lays")) ;
	    products.add(new Product(5, "Pringles")) ;
	    products.add(new Product(7,"Bounty")) ;
	    products.add(new Product(6,"Cake")) ;
	    products.add(new Product(8,"Eclairs")) ;
	    products.add(new Product(9,"Fanta")) ;
	    products.add(new Product(10,"Maza")) ;
	    products.add(new Product(4,"Spagetti")) ; //doesn't return as it is repeated
	    
	    for (Product p : products) {
            System.out.println(p);
	  
	    }

	}

}
