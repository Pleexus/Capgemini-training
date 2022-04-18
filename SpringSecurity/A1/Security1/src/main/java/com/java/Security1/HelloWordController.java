package com.java.Security1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWordController {
	@GetMapping("/")
    public String HelloWord(){
        return "Hello World";
    }
}
