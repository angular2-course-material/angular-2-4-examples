import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ],
  declarations: [DashboardComponent, CardComponent],
  exports: [RouterModule]
})
export class HomeModule { }
