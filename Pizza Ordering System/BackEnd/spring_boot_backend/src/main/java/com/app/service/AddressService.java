package com.app.service;

import com.app.DTO.AddressDTO;
import com.app.entity.Address;

public interface AddressService {
	
	Address addUserAddress(AddressDTO addressDto);
}
