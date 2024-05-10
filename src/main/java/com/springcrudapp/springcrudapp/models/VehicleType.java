package com.springcrudapp.springcrudapp.models;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class VehicleType extends CommonObject {
    
}
