package io.microservice.moviecatalogservice.model;

import java.util.List;

public class UserRating {
	
	private String userId;
	private List <Rating> userRating;
	
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public List<Rating> getUserRating() {
		return userRating;
	}

	public void setUserRating(List<Rating> userRating) {
		this.userRating = userRating;
	}
	
	
}
