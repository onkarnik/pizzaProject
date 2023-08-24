package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.CartItemDTO;
import com.app.entity.CartItem;
import com.app.service.CartItemService;

@RestController
//@RequestMapping("/cart")
@CrossOrigin(origins = "*")
public class CartItemController {
	
	@Autowired
	private CartItemService cartService;
	
	@PreAuthorize("hasRole('user')")
	@GetMapping("/cartItem/{userId}")
	public List<CartItemDTO> getAllCartItems(@PathVariable @Valid String userId ){
	
		//http://127.0.0.1:7070/cartItem/onkar123
		
		return cartService.getAllCartItems(userId);
	}
	
	@PreAuthorize("hasRole('user')")
	@PostMapping("addToCart")
	public CartItem addToCart(@RequestBody @Valid CartItemDTO cartItemDto) {
		
		//http://127.0.0.1:7070/addToCart
		
		return cartService.addCartItem(cartItemDto);
	}
	
	@PreAuthorize("hasRole('user')")
	@DeleteMapping("deleteItem/{pizzaName}")
	public String deleteCartItem(@PathVariable String pizzaName) {
		
		if(pizzaName==null) {
			return "Item name cannot be null";
		}else {
			return cartService.deleteCartItem(pizzaName);
		}
	}
}
