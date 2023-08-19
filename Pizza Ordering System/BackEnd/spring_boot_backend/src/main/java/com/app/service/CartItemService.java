package com.app.service;

import com.app.DTO.CartItemDTO;
import com.app.entity.CartItem;

public interface CartItemService {
	CartItem addCartItem(String userId,CartItemDTO cartItemDto);
}
