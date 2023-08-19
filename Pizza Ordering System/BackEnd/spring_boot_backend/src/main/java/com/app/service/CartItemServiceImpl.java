package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.CartItemDTO;
import com.app.entity.CartItem;
import com.app.entity.User;
import com.app.repository.CartItemRepo;
import com.app.repository.UserRepo;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

	@Autowired
	private CartItemRepo cartItemRepo;
	
	@Autowired
	private UserRepo userRepo; 
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public CartItem addCartItem(String userId, CartItemDTO cartItemDto) {
		
		CartItem cartItem = mapper.map(cartItemDto, CartItem.class);
		
		System.out.println("in addToCart CartItemDTO service :"+cartItem);
		User user = userRepo.findById(userId).orElseThrow();
		
		cartItem.setUser(user);
		
		 return cartItemRepo.save(cartItem);

	}

}
