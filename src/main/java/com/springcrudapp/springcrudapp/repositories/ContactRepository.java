package com.springcrudapp.springcrudapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springcrudapp.springcrudapp.models.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Integer>{
    
}
