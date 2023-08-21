package com.app.DTO;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entity.Price;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddressDTO {
	
	@NotBlank
	private String addressLine1;
	
	@NotBlank
	private String pinCode;
	
	@NotBlank
	private String city;
	
	@NotBlank
	private String State;
	
	@NotBlank
	private String userName;
}
