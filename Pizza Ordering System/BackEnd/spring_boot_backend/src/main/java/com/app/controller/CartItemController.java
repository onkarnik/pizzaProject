package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.CartItemDTO;
import com.app.entity.CartItem;
import com.app.service.CartItemService;

@RestController
public class CartItemController {
	
	@Autowired
	private CartItemService cartService;
	
	@PreAuthorize("hasRole('user')")
	@PostMapping("addToCart/{userId}")
	public CartItem addToCart(@PathVariable String userId,@RequestBody CartItemDTO cartItemDto) {
		
		System.out.println("In cartItem controller : "+cartItemDto);
		return cartService.addCartItem(userId, cartItemDto);
	}
}
