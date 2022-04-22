package io.microservice.movieinfoservice.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.microservice.movieinfoservice.model.Movie;
import io.microservice.movieinfoservice.model.MovieSummary;

@RestController
@RequestMapping("/movies")
public class MovieResource {
	@Value("${api.key}")
	private String apiKey;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@RequestMapping("/{movieId}")
	public Movie getMovieInfo(@PathVariable("movieId") String movieId) {
//		return new Movie(movieId, "Prajwal");
		int i = Integer.valueOf(movieId);
		MovieSummary movieSummary = restTemplate.getForObject(
				"https://api.themoviedb.org/3/movie/" + i + "?api_key=" + apiKey,
//				"https://api.themoviedb.org/3/movie/550?api_key=d9750f56c3cf415087c163d1a3efe7b7",
				MovieSummary.class
		);
		
		return new Movie(movieId, movieSummary.getTitle(), movieSummary.getOverview());
		
		
	}

}
