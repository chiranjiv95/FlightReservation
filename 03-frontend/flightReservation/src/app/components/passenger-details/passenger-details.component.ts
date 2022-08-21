import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css'],
})
export class PassengerDetailsComponent implements OnInit {
  flightData: any;

  passengerFirstName: any;
  passengerLastName: any;
  passengerMiddleName: any;
  passengerPhone: any;
  passengerEmail: any;

  constructor(
    private service: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service
      .getFlight(
        Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')!)
      )
      .subscribe((res: any) => {
        this.flightData = res;
      });
  }

  public onPassengerFormSubmit(data: any) {
    data.flightId = this.flightData.id;
    this.service.saveReservation(data).subscribe((res: any) => {
      this.router.navigate(['/confirm/' + res.id]);
    });
  }
}
