import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})*/
@NgModule({})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [AuthService]
    };
  }
}
