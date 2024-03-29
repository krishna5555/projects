package com.example.expense.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.expense.model.Category;
import com.example.expense.repository.CategoryRepository;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CategoryController {
	
	CategoryRepository categoryRepository;
	
	public CategoryController(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	@GetMapping("/categories")
	Collection<Category> categories(){
		return categoryRepository.findAll();
	}
	
	@GetMapping("/category/{id}")
	ResponseEntity<?> getCategory(@PathVariable Long id){
		Optional<Category> category = categoryRepository.findById(id);
		return category.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@PostMapping("/category")
	ResponseEntity<?> addCategory(@RequestBody Category category) throws URISyntaxException{
		System.out.println("post:"+category.getId());
		Category newCategory = categoryRepository.save(category);
		return ResponseEntity.created(new URI("api/category/"+newCategory.getId()))
				.body(newCategory);
	}
	
	@PutMapping("/category")
	ResponseEntity<?> updateCategory(@RequestBody Category category) throws URISyntaxException{
		Category updatedCategory = categoryRepository.save(category);
		return ResponseEntity.created(new URI("api/category/"+updatedCategory.getId()))
				.body(updatedCategory);
	}
	
	@DeleteMapping("/category/{id}")
	ResponseEntity<?> deleteCategory(@PathVariable Long id){
		categoryRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
