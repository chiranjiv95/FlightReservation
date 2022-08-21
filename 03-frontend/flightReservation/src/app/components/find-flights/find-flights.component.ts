import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css'],
})
export class FindFlightsComponent implements OnInit {
  from: any;
  to: any;
  departureDate: any;

  constructor(private service: ReservationService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(data: { from: string; to: string; departureDate: Date }) {
    this.service
      .getFlights(data.from, data.to, data.departureDate)
      .subscribe((res: any) => {
        this.service.flightData = res;
        this.router.navigate(['/displayFlights']);
      });
  }
}
