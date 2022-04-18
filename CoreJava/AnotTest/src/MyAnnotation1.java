
//Creating annotation  
import java.lang.annotation.*;  
import java.lang.reflect.*;  
  
@Retention(RetentionPolicy.RUNTIME)  
@Target(ElementType.METHOD)  
@interface test{  
int value();  
}  
  
//Applying annotation  
class Hello{  
@test(value=10)  
public void displayMethod(){System.out.println("testing annotation");}  
}  
  
//Accessing annotation  
class MyAnnotation1{  
public static void main(String[] args)throws Exception{  
  
Hello h=new Hello();  
Method m=h.getClass().getMethod("displayMethod");  
  
test manno=m.getAnnotation(test.class);  
System.out.println("value is: "+manno.value());  
}}  