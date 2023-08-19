package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.PizzaDTO;
import com.app.entity.Pizza;
import com.app.service.PizzaService;


@RestController
@RequestMapping("/pizza")
public class PizzaController 
{
	
	@Autowired
	private PizzaService pizzaService;
	
	//http://host:port/pizza
	@GetMapping
	public List<Pizza> getAllPizza()
	{
		System.out.println("In controller");
		return pizzaService.getAllPizza();
	}
	
	@PostMapping
	@PreAuthorize("hasRole('admin')")
	public Pizza addPizza(@RequestBody @Valid PizzaDTO addPizza)
	{
		System.out.println(addPizza);
		return pizzaService.addPizza(addPizza);
	}
	
	@DeleteMapping("/{pizzaId}")
	@PreAuthorize("hasRole('admin')")
	public Pizza deletePizza(@PathVariable Long pizzaId)
	{
		return pizzaService.deletePizza(pizzaId);
		
	}
}
