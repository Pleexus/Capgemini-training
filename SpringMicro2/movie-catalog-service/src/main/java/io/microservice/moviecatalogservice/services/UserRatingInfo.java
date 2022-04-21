package io.microservice.moviecatalogservice.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import io.microservice.moviecatalogservice.model.Rating;
import io.microservice.moviecatalogservice.model.UserRating;

@Service
public class UserRatingInfo {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@HystrixCommand(fallbackMethod = "getFallbackUserRating",
			commandProperties = {
					//timeout if something doesn't happen in 2 sec
					@HystrixProperty(name= "execution.isolation.thread.timeoutInMilliseconds", value= "2000"),
					//no of request to consider for timeout
					@HystrixProperty(name= "circuitBreaker.requestVolumeThreshold", value= "5"),
					// percentage of request failed for VolThreshold
					@HystrixProperty(name= "circuitBreaker.errorThresholdPercentage", value= "50"),
					// how long circuit breaker sleeps before restoring service
					@HystrixProperty(name= "circuitBreaker.sleepWindowInMilliseconds", value= "5000")
					
			})
	public UserRating getUserRating(String userId) {
		return restTemplate.getForObject("http://rating-data-service/ratingsdata/users/"+ userId, UserRating.class);
	}
	
	public UserRating getFallbackUserRating(String userId) {
		UserRating userRating = new UserRating();
		userRating.setUserId(userId);
		userRating.setUserRating(Arrays.asList(
				new Rating("0",0)
		));
		return userRating;
	}
}
