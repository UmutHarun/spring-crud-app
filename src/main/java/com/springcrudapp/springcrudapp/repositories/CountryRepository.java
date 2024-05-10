package com.springcrudapp.springcrudapp.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import com.springcrudapp.springcrudapp.models.Country;
import com.springcrudapp.springcrudapp.services.CountryService;

@Repository
public interface CountryRepository extends JpaRepository<Country,Integer> {
    
}
