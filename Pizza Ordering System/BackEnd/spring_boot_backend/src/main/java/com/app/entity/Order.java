package com.app.entity;


import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="user_order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Order extends BaseEntity{
	
	private LocalDate orderDate;
	
	private String userName;
	
	@OneToOne
	@JoinColumn(name = "address_id")
	private Address address;
	
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "order_cartItem")
	private CartItem cartItem;
}
