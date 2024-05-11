package com.springcrudapp.springcrudapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.springcrudapp.springcrudapp.models.Country;
import com.springcrudapp.springcrudapp.repositories.CountryRepository;

@CrossOrigin
@SpringBootApplication
@EntityScan(basePackages = {"com.springcrudapp.springcrudapp.models"})
public class SpringCrudAppApplication {

	// @Autowired
    // private CountryRepository countryRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringCrudAppApplication.class, args);
	}


	// @Override
    // public void run(String... args) throws Exception {
    //     // Create and save a new country
    //     Country country = new Country(null, null, null, null, null, null, null);
    //     country.setCode("US");
    //     country.setCapital("Washington, D.C.");
    //     country.setDescription("United States of America");
    //     country.setNationality("American");
    //     country.setContinent("North America");
    //     countryRepository.save(country);

    //     // You can add more countries similarly
    // }
}
