package com.umel.cineapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.umel.cineapp.entities.Image;
import com.umel.cineapp.service.ImageService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ImageController {

	@Autowired
	private ImageService imageService;
	
	@PostMapping("/image")
	public Image saveImage(@RequestBody Image image) {
		return imageService.saveImage(image);
	}
}
