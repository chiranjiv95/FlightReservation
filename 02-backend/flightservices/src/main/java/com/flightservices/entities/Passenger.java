package com.flightservices.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
@Entity
public class Passenger extends AbstractEntity {

    private String firstName;
    private String lastName;
    private String middleName;
    private String email;
    private String phone;
}
