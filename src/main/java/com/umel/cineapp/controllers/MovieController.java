package com.umel.cineapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.umel.cineapp.entities.Movie;
import com.umel.cineapp.entities.Schedule;
import com.umel.cineapp.service.MovieService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	
	@Autowired
	public MovieService setMovieService(MovieService movieService) {
		this.movieService = movieService;
		return this.movieService;
	}
	
	/*
	@Autowired
	public MovieController(MovieService movieService) {
		this.movieService = movieService;
	 }*/
	

	@GetMapping("/movies")
	public List<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	@GetMapping("/movies/{id}")
	public Movie getMovie(@PathVariable Integer id) {
		return movieService.findById(id);
	}
	@GetMapping("/movies/{id}/schedule")
	public List<Schedule> getSchedules(@PathVariable Integer id){
		return movieService.getAllSchedules(id);
	}
	
	@PutMapping("/movies")
	public Movie updateMovie(@RequestBody Movie movie) {
		return movieService.updateMovie(movie);
	}
	
	@PostMapping("/movies")
	public Movie insertMovie(@RequestBody Movie movie) {
		return movieService.saveMovie(movie);
	}
	
}
