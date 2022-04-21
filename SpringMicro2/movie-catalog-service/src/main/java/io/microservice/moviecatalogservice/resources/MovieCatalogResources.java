package io.microservice.moviecatalogservice.resources;

import java.lang.reflect.ParameterizedType;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import io.microservice.moviecatalogservice.model.CatalogItem;
import io.microservice.moviecatalogservice.model.Movie;
import io.microservice.moviecatalogservice.model.Rating;
import io.microservice.moviecatalogservice.model.UserRating;
import io.microservice.moviecatalogservice.services.MovieInfo;
import io.microservice.moviecatalogservice.services.UserRatingInfo;


@RestController
@RequestMapping("/catalog")
public class MovieCatalogResources {
	//injecting bean RestTemplate
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private DiscoveryClient discoveryClient; //for load balancing
	
	@Autowired
	private WebClient.Builder webClientBuilder;
	
	@Autowired
	MovieInfo movieInfo;
	
	@Autowired
	UserRatingInfo userRatingInfo;
	
	
	@RequestMapping("/{userId}")
	public List<CatalogItem> getCatalog(@PathVariable("userId") String userId){
		
		// get all rated movie id, 
		// RestTemplate restTemplate = new RestTemplate();
//		List <Rating> ratings = Arrays.asList(
//				new Rating("1234", 4),
//				new Rating("5678", 3)
//				
//		);
		
//		UserRating ratings = restTemplate.getForObject("http://localhost:8083/ratingsdata/users/"+ userId, UserRating.class);
		UserRating ratings = userRatingInfo.getUserRating(userId);
		
		return ratings.getUserRating().stream().map(rating -> {
			

			//			use builder pattern and giving us client
//			get uri and fetch and convert body to instance of Movie class
//			Mono is reactive way of saying u will get the object in future
			// blocking execution till mono is fullfilled
			
//			Movie movie = webClientBuilder.build()
//					.get()	
//					.uri("http://localhost:8082/movies/" + rating.getMovieId())
//					.retrieve()
//					.bodyToMono(Movie.class)
//					.block();
			
			return movieInfo.getCatalogItem(rating);
						
		})
		.collect(Collectors.toList());
		
		
		
//		return Collections.singletonList(
//				new CatalogItem("Transformers", "Test", 4)
//				);
	}
	
	
	
	
	//not need anymore as the two api call that can fail have own fallbacks
}
