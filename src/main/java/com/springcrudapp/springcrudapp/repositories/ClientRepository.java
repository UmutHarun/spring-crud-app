package com.springcrudapp.springcrudapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springcrudapp.springcrudapp.models.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client,Integer>{
    
}
