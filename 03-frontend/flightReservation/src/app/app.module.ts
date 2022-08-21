import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './services/reservation.service';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/findFlights', pathMatch: 'full' },
  { path: 'findFlights', component: FindFlightsComponent },
  { path: 'displayFlights', component: DisplayFlightsComponent },
  { path: 'passengerDetails/:id', component: PassengerDetailsComponent },
  { path: 'confirm/:id', component: ConfirmReservationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmReservationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
