package com.springcrudapp.springcrudapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.springcrudapp.springcrudapp.models.Country;
import com.springcrudapp.springcrudapp.repositories.CountryRepository;

@Service
public class CountryService {
    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getCountries(){
        return countryRepository.findAll();
    }

    public void addCountry(Country country){
        countryRepository.save(country);
    }

    public Optional<Country> getCountryById(int id){
        return countryRepository.findById(id);
    }

    public void editCountry(Country country){       
        countryRepository.save(country);
    }
}
