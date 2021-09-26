import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { DataCollectorRoutingModule } from './data-collector-routing.module';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { NewFieldCaptureComponent } from './components/new-field-capture/new-field-capture.component';

import { FormsModule } from '@angular/forms';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { FarmerGroupsComponent } from './components/farmer-groups/farmer-groups.component';

@NgModule({
  declarations: [
    NewRegistrationComponent,
    NewFieldCaptureComponent,
    FarmerGroupsComponent
  ],
  imports: [
    CommonModule,
    DataCollectorRoutingModule,
    SharedModule,
    LeafletModule,
    ContenteditableModule,
    FormsModule
  ]
})
export class DataCollectorModule { }
