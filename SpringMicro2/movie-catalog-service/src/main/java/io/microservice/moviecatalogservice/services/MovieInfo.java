package io.microservice.moviecatalogservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import io.microservice.moviecatalogservice.model.CatalogItem;
import io.microservice.moviecatalogservice.model.Movie;
import io.microservice.moviecatalogservice.model.Rating;

@Service
public class MovieInfo {
	
	@Autowired
	private RestTemplate restTemplate;
	
//	bulkhead pattern
	@HystrixCommand(
			fallbackMethod = "getFallbackCatalogItem",
//			for seperate bulkhead
			threadPoolKey = "movieInfoPool",
			threadPoolProperties = {
//					allocate threads
					@HystrixProperty(name= "coreSize", value = "20"),
//					allocate threads for waiting before they can get accessed
					@HystrixProperty(name = "maxQueueSize", value = "10")
			})
	public CatalogItem getCatalogItem(Rating rating) {
		// for each id ,call movie info service and get details
		Movie movie = restTemplate.getForObject("http://movie-info-service/movies/" + rating.getMovieId(), Movie.class);
		
		//put them all together
		return new CatalogItem(movie.getName(), movie.getDescription(), rating.getRating());
	}
	
	public CatalogItem getFallbackCatalogItem(Rating rating) {
		return new CatalogItem("Movie name not Found", "", rating.getRating());
	}
}
