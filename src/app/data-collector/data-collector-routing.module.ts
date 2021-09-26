import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { NewFieldCaptureComponent } from './components/new-field-capture/new-field-capture.component';
import { FarmerGroupsComponent } from './components/farmer-groups/farmer-groups.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'requests'
  },
  {
    path: 'new-farmer',
    component: NewRegistrationComponent
  },
  {
    path: 'farm-boundary',
    component: NewFieldCaptureComponent
  },
  {
    path: 'requests',
    component: FarmerGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectorRoutingModule { }
