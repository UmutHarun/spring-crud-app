package com.springcrudapp.springcrudapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springcrudapp.springcrudapp.models.VehicleType;

@Repository
public interface VehicleRepository extends JpaRepository<VehicleType,Integer>{
    
}
