package com.springcrudapp.springcrudapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springcrudapp.springcrudapp.models.Country;
import com.springcrudapp.springcrudapp.services.CountryService;

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

}
