package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Product;
import com.example.repo.ProductRepo;

@RestController
public class ProductController {

	@Autowired
	Product product;
	
	@Autowired
	ProductRepo productRepo;
	
	@PostMapping("/addProduct")
	public ResponseEntity<?> addProduct(@RequestParam("name") String name,
			                           @RequestParam("quantity") int quantity,
			                           @RequestParam("amount") double amount){
		product.setName(name);
		product.setQuantity(quantity);
		product.setAmount(amount);
		productRepo.save(product);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
