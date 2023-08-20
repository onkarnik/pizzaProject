package com.app.service;

import java.util.List;

import com.app.DTO.CartItemDTO;
import com.app.entity.CartItem;

public interface CartItemService {
	CartItem addCartItem(CartItemDTO cartItemDto);
	
	List<CartItemDTO> getAllCartItems(String userId);
	
	String deleteCartItem(String pizzaName);
}
