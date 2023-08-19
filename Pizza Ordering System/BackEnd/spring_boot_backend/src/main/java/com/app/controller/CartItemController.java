package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
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
	@GetMapping("/cartItems/{userId}")
	public List<CartItemDTO> getAllCartItems(@PathVariable @Valid String userId ){
	
		return cartService.getAllCartItems(userId);
	}
	
	@PreAuthorize("hasRole('user')")
	@PostMapping("addToCart")
	public CartItem addToCart(@RequestBody @Valid CartItemDTO cartItemDto) {
		
		System.out.println("In cartItem controller : "+cartItemDto);
		return cartService.addCartItem(cartItemDto);
	}
}
