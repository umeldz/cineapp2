package com.umel.cineapp.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="movies")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer movieId;
	private String title;
	private Integer duration;
	private Character clasification;
	private LocalDate releaseDate;
	//private Integer detailsId;
	private byte[] image;
	private String genre;
	
	//schedule
	@OneToMany(mappedBy="movie",fetch=FetchType.EAGER) 
	@JsonIgnore
	private List<Schedule> schedules;
	
	@OneToOne
	@JoinColumn(name ="details_id")
	private MovieDetails movieDetails;
	
	public Movie() {
		
	}
	public Integer getMovieId() {
		return movieId;
	}
	public void setMovieId(Integer movieId) {
		this.movieId = movieId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
	}
	public Character getClasification() {
		return clasification;
	}
	public void setClasification(Character clasification) {
		this.clasification = clasification;
	}
	public LocalDate getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}
	
	
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public List<Schedule> getSchedules() {
		return schedules;
	}
	public void setSchedules(List<Schedule> schedules) {
		this.schedules = schedules;
	}
	public MovieDetails getMovieDetails() {
		return movieDetails;
	}
	public void setMovieDetails(MovieDetails movieDetails) {
		this.movieDetails = movieDetails;
	}
	
}
