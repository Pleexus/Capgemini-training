package com.Q8;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;


@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"com.Q8"})
public class AppConfig extends WebMvcConfigurerAdapter {
	
	@Bean(name = "viewResolver")
	   public InternalResourceViewResolver getViewResolver() {
	       InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();

	       viewResolver.setPrefix("/WEB-INF/pages/");
	       viewResolver.setSuffix(".jsp");

	       return viewResolver;
	   }
	   
	   @Bean(name = "messageSource")
	   public MessageSource getMessageResource()  {
	       ReloadableResourceBundleMessageSource messageResource= new ReloadableResourceBundleMessageSource();
	       
	       // Read i18n/messages_xxx.properties file.
	       // For example: i18n/messages_en.properties

	       messageResource.setBasename("classpath:src/main/webapp/WEB-INF/userLogin");
	       messageResource.setDefaultEncoding("UTF-8");
	       return messageResource;
	   }
	   
	   @Bean(name = "localeResolver")
	   public LocaleResolver getLocaleResolver()  {
	       CookieLocaleResolver resolver= new CookieLocaleResolver();
	       resolver.setCookieDomain("myAppLocaleCookie");
	       // 60 minutes
	    
	       resolver.setCookieMaxAge(60*60);
	       return resolver;
	   }
}
