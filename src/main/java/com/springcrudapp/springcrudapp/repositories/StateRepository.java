package com.springcrudapp.springcrudapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springcrudapp.springcrudapp.models.State;

@Repository
public interface StateRepository extends JpaRepository<State,Integer> {
    
}
