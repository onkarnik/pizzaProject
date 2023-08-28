package com.app.DTO;



import java.time.LocalDate;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entity.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Builder.Default;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor()
@ToString
public class OrderDto {
	
	@NotNull
	private String date;
	
	@NotBlank
	private String userName;
	
	@NotBlank
	private Long addressId;
	
	@NotBlank
	private List<Long> cartId;
	
	private OrderStatus orderStatus;
	
}
