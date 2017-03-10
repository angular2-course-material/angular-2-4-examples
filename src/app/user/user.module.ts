import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { 
        path: '',
        component: WrapperComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: ':id/edit',
            component: EditComponent
          }
        ]
      }
    ])
  ],
  declarations: [ProfileComponent, EditComponent, WrapperComponent],
  exports: [RouterModule]
})
export class UserModule { }
