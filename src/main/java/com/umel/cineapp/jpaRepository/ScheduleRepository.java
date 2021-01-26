package com.umel.cineapp.jpaRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umel.cineapp.entities.Movie;
import com.umel.cineapp.entities.Schedule;

public interface ScheduleRepository  extends JpaRepository<Schedule, Integer>{
	public List<Schedule> findByMovie(Movie movie);
}
