package com.springcrudapp.springcrudapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springcrudapp.springcrudapp.models.Country;
import com.springcrudapp.springcrudapp.services.CountryService;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;



@CrossOrigin
@RestController
@RequestMapping("/api")
public class CountryController {
    
    @Autowired
    private CountryService countryService;
    
    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getCountries() {
        List<Country> countries = countryService.getCountries();
        return ResponseEntity.ok(countries);
    }

    @PostMapping("/add-country")
    public ResponseEntity<ResponseEntity> addCountry(@RequestBody Country country) {
        countryService.addCountry(country);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/country/{id}")
    public ResponseEntity<Country> getCountryById(@PathVariable Integer id){
        Country country = countryService.getCountryById(id).get();
        return ResponseEntity.ok(country);
    }

    @PutMapping("/edit-country/{id}")
    public ResponseEntity<Country> editCountry(@PathVariable Integer id, @RequestBody Country newCountry) {
        Country country = countryService.getCountryById(id).get();
        country.setName(newCountry.getName());
        country.setCode(newCountry.getCode());
        country.setCapital(newCountry.getCapital());
        country.setDescription(newCountry.getDescription());
        country.setContinent(newCountry.getContinent());
        country.setNationality(newCountry.getNationality());
        countryService.editCountry(country);
        return ResponseEntity.ok(country);
    }

    @DeleteMapping("/delete-country/{id}")
    public ResponseEntity deleteCountry(@PathVariable Integer id){
        countryService.deleteCountry(id);
        return ResponseEntity.ok().build();
    }
}
