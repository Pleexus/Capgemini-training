public class Product implements Comparable<Product> {
	
	private int id;
	private String name;
	
	

	public Product(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	
	
	public int getId() {
		return id;
	}


	private String getName() {
		return name;
	}


	@Override public int compareTo(Product p)
    {
        if (id == p.getId()) {
            return 0;
        }
        else if (name.compareTo(p.getName()) < 0) {
            return -1;
        }
        else
            return 1;
    }
	
	@Override
	public String toString() {
		return "product [id=" + id + ", name=" + name + "]";
	}
}
