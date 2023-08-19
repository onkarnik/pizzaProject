package com.app.controller;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;
import com.app.service.UserService;

@RestController("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody @Valid User user)
	{
		return userService.registerNewUser(user);
	}
	
	@PostConstruct
	public void initRolesAndUser()
	{
		userService.initRolesAndUser();
	}

	//for person having multiple roles
	//@PreAuthorize("hasAnyRole('admin','user')")
	@GetMapping("/forAdmin")
	@PreAuthorize("hasRole('admin')")
	public String forAdmin()
	{
		return "This URL is only accessible to admin";
	}
	
	@GetMapping("/forUser")
	@PreAuthorize("hasRole('user')")
	public String forUser()
	{
		return "This URL is only accesible to user";
	}
}
