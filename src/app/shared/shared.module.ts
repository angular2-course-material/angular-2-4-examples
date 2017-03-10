import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { NotificationComponent } from './notification/notification.component';

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})*/
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    NotificationComponent
  ],
  declarations: [NotificationComponent]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [AuthService, NotificationService]
    };
  }
}
