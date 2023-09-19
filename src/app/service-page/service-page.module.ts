import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServiceComponent } from './our-service/our_service.component';
import { serviceRoutingModule } from './service-routing.module';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, serviceRoutingModule],
  declarations: [OurServiceComponent],
})
export class ServicePageModule {}
