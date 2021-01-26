package com.umel.cineapp.jpaRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umel.cineapp.entities.Movie;

public interface MovieRepository  extends JpaRepository<Movie, Integer>{

}
