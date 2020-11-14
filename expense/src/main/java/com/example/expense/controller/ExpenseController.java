package com.example.expense.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.expense.model.Expense;
import com.example.expense.repository.ExpenseRepository;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ExpenseController {
	
	@Autowired
	ExpenseRepository expenseRepository;
	
	@PostMapping("/submitExpenseForm")
	ResponseEntity<?> submitExpenseForm(@RequestBody Expense expense) {
		expenseRepository.save(expense);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/getAllExpenses")
	Collection<Expense> getAllExpenses(){
		return expenseRepository.findAll();
	}
	
	@DeleteMapping("/deleteExpense/{id}")
	ResponseEntity<?> deleteExpense(@PathVariable Long id){
		expenseRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
