package com.umel.cineapp.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="movie_details")
public class MovieDetails {
	@Id
	private Integer id;
	private String film_director;
	private String actors;
	private String sinopsis;
	private String trailer;
	public Integer getId() {
		return id;
	}
	public void setDetailsId(Integer id) {
		this.id = id;
	}
	public String getFilm_director() {
		return film_director;
	}
	public void setFilm_director(String film_director) {
		this.film_director = film_director;
	}
	public String getActors() {
		return actors;
	}
	public void setActors(String actors) {
		this.actors = actors;
	}
	public String getSinopsis() {
		return sinopsis;
	}
	public void setSinopsis(String sinopsis) {
		this.sinopsis = sinopsis;
	}
	public String getTrailer() {
		return trailer;
	}
	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}
	
	
}
