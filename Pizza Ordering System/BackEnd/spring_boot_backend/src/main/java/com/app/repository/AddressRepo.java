package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Address;

public interface AddressRepo extends JpaRepository<Address, Long> {

	
}
