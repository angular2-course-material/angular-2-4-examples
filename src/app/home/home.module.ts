import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DashboardComponent }
  ])],
  declarations: [DashboardComponent],
  exports: [RouterModule]
})
export class HomeModule { }
