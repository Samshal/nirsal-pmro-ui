import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShellComponent } from './shared/components/shell/shell.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./public/public.module").then(m => m.PublicModule)
  },
  {
    path: "farmers-info",
    component: ShellComponent,
    loadChildren: () => import("./data-collector/data-collector.module").then(m => m.DataCollectorModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: false
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
