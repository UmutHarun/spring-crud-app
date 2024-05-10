package com.springcrudapp.springcrudapp.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Table(name = "state")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class State {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "capital")
    private String capital;

    @Column(name = "code")
    private String code;

    @ManyToOne
    @JoinColumn(name = "countryid",insertable = false,updatable = false)
    private Country country;

    private Integer countryid;

    @Column(name = "details")
    private String details;
}
