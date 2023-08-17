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
public class PizzaDTO {
	
	@NotBlank
    private String name;
	
	@NotNull
    private List<Price> prices;
	
	@NotBlank
    private String category;
	
	@NotBlank
    private String image;
	
	@NotBlank
    private String description;

    // Constructors, getters, setters
}
