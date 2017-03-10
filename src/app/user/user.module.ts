import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent }
    ])
  ],
  declarations: [ProfileComponent],
  exports: [RouterModule]
})
export class UserModule { }
