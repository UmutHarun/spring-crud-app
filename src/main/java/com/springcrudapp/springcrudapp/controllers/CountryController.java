package com.springcrudapp.springcrudapp.controllers;

import java.util.List;
import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.springcrudapp.springcrudapp.models.Country;
import com.springcrudapp.springcrudapp.services.CountryService;

@Controller
public class CountryController {
    
    @Autowired
    private CountryService countryService;
    
    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getCountries() {
        List<Country> countries = countryService.getCountries();
        return ResponseEntity.ok(countries);
    }

}
