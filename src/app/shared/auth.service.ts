import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  authVar: number;
  constructor() { 
    console.log('init AuthService!');
  }

  auth(authVar: number) {
    console.log('Auth service!', this.authVar);
    this.authVar = authVar;
  }

}
