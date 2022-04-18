package java11;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Student {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		File file = new File("C:\\Users\\micro\\eclipse-workspace\\java11\\src\\java11\\StudentList.txt");
        FileInputStream fileInputStream = new FileInputStream(file);
        InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream);
        
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
        
        Scanner sc = new Scanner(file);
        
        while (sc.hasNextLine())
          System.out.println(sc.nextLine());
  
        String line;
        line = bufferedReader.readLine();
        int wordCount = 0;
        int whiteSpaceCount = 0;
        String words[] = line.split("\\s+");
        wordCount += words.length;
        whiteSpaceCount += wordCount - 1;
                

        System.out.println("Total Student count = "+ wordCount);
        System.out.println("Total number of whitespaces = "+ whiteSpaceCount);

	}

}
