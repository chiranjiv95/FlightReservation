import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css'],
})
export class ConfirmReservationComponent implements OnInit {
  reservationId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reservationId = Number.parseInt(
      this.route.snapshot.paramMap.get('id')!
    );
  }
}
