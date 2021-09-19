import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { DataCollectorRoutingModule } from './data-collector-routing.module';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { NewFieldCaptureComponent } from './components/new-field-capture/new-field-capture.component';


@NgModule({
  declarations: [
    NewRegistrationComponent,
    NewFieldCaptureComponent
  ],
  imports: [
    CommonModule,
    DataCollectorRoutingModule,
    SharedModule,
    LeafletModule
  ]
})
export class DataCollectorModule { }
