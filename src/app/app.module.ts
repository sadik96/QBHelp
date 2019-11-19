import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { EventComponent } from './event/event.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DonationComponent } from './donation/donation.component';

const appRoutes: Routes = [
   { path: 'events', component: EventComponent},
   { path: '', component: CarouselComponent},
   { path: 'donate', component: DonationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LogoHeaderComponent,
    EventComponent,
    CarouselComponent,
    DonationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
