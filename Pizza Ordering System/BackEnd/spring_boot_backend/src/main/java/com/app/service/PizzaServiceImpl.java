package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.PizzaDTO;
import com.app.entity.Pizza;
import com.app.repository.PizzaRepo;

@Service
@Transactional
public class PizzaServiceImpl implements PizzaService {

	@Autowired
	private PizzaRepo pizzaRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Pizza> getAllPizza() {
		
		System.out.println("IN service impl");
		
		List<Pizza> findAll = pizzaRepo.findAll();
		
		return findAll;
	}

	@Override
	public Pizza addPizza(PizzaDTO pdto) {
		
		Pizza pizza = mapper.map(pdto, Pizza.class);
		
		return pizzaRepo.save(pizza);
	}

	@Override
	public Pizza deletePizza(Long pizzaId) {
		
		Pizza pizza = pizzaRepo.findById(pizzaId).orElseThrow();
		pizzaRepo.delete(pizza);
		return pizza;
	}

}
