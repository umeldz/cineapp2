package com.umel.cineapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umel.cineapp.entities.Image;
import com.umel.cineapp.jpaRepository.ImageRepository;

@Service
public class ImageService {
	
	@Autowired
	private ImageRepository imageRepository;
	
	
	public Image saveImage(Image image) {
		return imageRepository.save(image);
	}

}
