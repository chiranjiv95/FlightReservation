package com.flightservices.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import java.sql.Timestamp;
import java.util.Date;


@Getter
@Setter
@Entity
public class Flight extends AbstractEntity{

    private String flightNumber;
    private String operatingAirlines;
    private String departureCity;
    private String arrivalCity;
    private Date dateOfDeparture;
    private Timestamp estimatedDepartureTime;


}
