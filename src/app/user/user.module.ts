import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ProfileComponent }
  ])],
  declarations: [ProfileComponent],
  exports: [RouterModule]
})
export class UserModule { }
