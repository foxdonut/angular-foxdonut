import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarAppComponent } from './car-app.component';

const routes: Routes = [{ path: '', component: CarAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarAppRoutingModule { }
