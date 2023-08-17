package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Pizza;

public interface PizzaRepo extends JpaRepository<Pizza, Long> {

}
