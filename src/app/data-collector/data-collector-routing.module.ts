import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { NewFieldCaptureComponent } from './components/new-field-capture/new-field-capture.component';

const routes: Routes = [
  {
    path: '',
    component: NewRegistrationComponent
  },
  {
    path: 'farm-boundary',
    component: NewFieldCaptureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectorRoutingModule { }
