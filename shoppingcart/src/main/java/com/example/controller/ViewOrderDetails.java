package com.example.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Order;
import com.example.repo.OrderRepo;

@RestController
public class ViewOrderDetails {

	@Autowired
	Order order;
	
	@Autowired
	OrderRepo orderRepo;
	
	@PostMapping("/getOrder")
	public Optional<Order> addProduct(@RequestParam("id") Long id){
		return orderRepo.findById(id);
	}
}
