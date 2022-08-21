package com.flightservices.dto;

import lombok.Data;

@Data
public class CreateReservationRequest {

    //client request will come in JSON format and all the information will be deserialized in this class

    private int flightId;

    private String passengerFirstName;
    private String passengerLastName;
    private String passengerMiddleName;
    private String passengerEmail;
    private String passengerPhone;

//    private String CardNumber;
//    private String expirationDate;
//    private String securityCode;



}
