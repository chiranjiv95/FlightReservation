import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  flightUrl: string = 'http://localhost:8080/flyaway/flights';
  reservationUrl: string = 'http://localhost:8080/flyaway/reservations';
  flightData: any;

  constructor(private _httpClient: HttpClient) {}

  //01-find flights
  public getFlights(from: string, to: string, departureDate: Date): any {
    return this._httpClient.get(
      this.flightUrl +
        '?from=' +
        from +
        '&to=' +
        to +
        '&departureDate=' +
        departureDate
    );
  }

  //02-get a single flight
  public getFlight(id: number): any {
    return this._httpClient.get(this.flightUrl + '/' + id);
  }

  //03-save reservation
  public saveReservation(reservation: any): any {
    return this._httpClient.post(this.reservationUrl, reservation);
     
  }
}
