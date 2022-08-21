package com.flightservices.integration;

import com.flightservices.dto.CreateReservationRequest;
import com.flightservices.dto.UpdateReservationRequest;
import com.flightservices.entities.Flight;
import com.flightservices.entities.Passenger;
import com.flightservices.entities.Reservation;
import com.flightservices.repos.FlightRepository;
import com.flightservices.repos.PassengerRepository;
import com.flightservices.repos.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class ReservationRestController {

    @Autowired
    private FlightRepository flightRepo;

    @Autowired
    private PassengerRepository passengerRepo;

    @Autowired
    private ReservationRepository reservationRepo;

    // method to return a list of flights according to requirement
    @GetMapping("/flights")
    public List<Flight> findFlights(@RequestParam("from") String from,@RequestParam("to") String to,@RequestParam("departureDate") @DateTimeFormat(pattern="MM-dd-yyyy") Date departureDate){
        List<Flight> flights = flightRepo.findFlights(from, to, departureDate);
        return flights;
    }

    // method to find a single flight
    @GetMapping(value = "/flights/{id}")
    public Flight findFlight(@PathVariable("id") int id){
        return flightRepo.findById(id).get();
    }

    // method to save a registration
    @PostMapping("/reservations")
    @Transactional
    public Reservation saveReservation(@RequestBody CreateReservationRequest request){
        //01- fetch the flight
        Flight flight=flightRepo.findById(request.getFlightId()).get();
        //02-create a passenger
        Passenger passenger=new Passenger();
        passenger.setFirstName(request.getPassengerFirstName());
        passenger.setLastName(request.getPassengerLastName());
        passenger.setMiddleName(request.getPassengerMiddleName());
        passenger.setEmail(request.getPassengerEmail());
        passenger.setPhone(request.getPassengerPhone());

        Passenger savedPassenger =  passengerRepo.save(passenger);

        //create reservation
        Reservation reservation= new Reservation();
        reservation.setFlight(flight);
        reservation.setPassenger(passenger);
        reservation.setCheckedIn(false);

        Reservation savedReservation = reservationRepo.save(reservation);

        return savedReservation;
    }


    //find reservation (for checkin)
    @GetMapping(value="/reservations/{id}")
    public Reservation findReservation(@PathVariable("id") int id){
       return reservationRepo.findById(id).get();
    }

    @PutMapping("/reservations")
    public Reservation updateReservation(@RequestBody UpdateReservationRequest request){

        Reservation  reservation = reservationRepo.findById(request.getReservationId()).get();
        reservation.setCheckedIn(request.isCheckIn());
        reservation.setNumberOfBags(request.getNumberOfBags());

        return reservationRepo.save(reservation);
    }



}
