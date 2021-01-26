package com.umel.cineapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import com.umel.cineapp.entities.Movie;
import com.umel.cineapp.entities.Schedule;
import com.umel.cineapp.jpaRepository.MovieRepository;
import com.umel.cineapp.jpaRepository.ScheduleRepository;

@Service
public class MovieService {
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private ScheduleRepository scheduleRepository;
	
	public List<Movie> getAllMovies(){
		return movieRepository.findAll();
	}
	public Movie findById(Integer id) {
		Movie movie = null;
		if(id !=null) {
			
		 Optional<Movie> optional = movieRepository.findById(id);
		 if(optional.isPresent()) {
			 movie = optional.get();
		 }
		  return movie;
		}
		return movie;
	}
	
	public List<Schedule> getAllSchedules(Integer movie_id){
		
		Movie movie = null;
		if(movie_id !=null) {
			
		 Optional<Movie> optional = movieRepository.findById(movie_id);
		 if(optional.isPresent()) {
			 movie = optional.get();
		 }else {
			 return null;
		 }
		 
		 List<Schedule> schedules = scheduleRepository.findByMovie(movie);
		 
		 return schedules;
		 
		}else {
			return null;
		}	
	}
	
	public Movie updateMovie(Movie movieToUpdate) {
		
		Movie movieFromRep = null;
		Integer id = movieToUpdate.getMovieId();
		
		Optional<Movie> movieOptional = movieRepository.findById(id);
		
		movieFromRep = movieOptional.get();
		movieFromRep.setImage(movieToUpdate.getImage());
		
		return movieRepository.save(movieFromRep);
	}
	
	public Movie saveMovie(Movie movie) {
		return movieRepository.save(movie);
	}
}
