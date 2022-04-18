package generic;


class Generic<K, V>
{
	K Key;
	V value;
	public K getKey() {
		return Key;
	}
	public void setKey(K key) {
		this.Key = key;
	}
	public V getValue() {
		return value;
	}
	public void setValue(V value) {
		this.value = value;
	}
	
}
public class Pair {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Generic<String, String> myOb1=new Generic<>();
		myOb1.setKey("1");
		myOb1.setValue("Hello");
		Generic<String, java.util.Date> myOb2=new Generic<>();
		myOb2.setKey("Today is");
		myOb2.setValue(new java.util.Date());
		System.out.println(myOb1.getKey()+" "+myOb1.getValue());
		System.out.println(myOb2.getKey()+" "+myOb2.getValue());

	}

}
