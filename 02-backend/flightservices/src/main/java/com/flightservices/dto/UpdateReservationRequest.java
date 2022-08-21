package com.flightservices.dto;

import lombok.Data;

@Data
public class UpdateReservationRequest {

    private int reservationId;
    private boolean checkIn;
    private int numberOfBags;

}
