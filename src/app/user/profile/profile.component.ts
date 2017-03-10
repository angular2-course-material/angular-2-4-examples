import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  shouldHideDiv = false;

  constructor(private auth: AuthService) { 
    this.auth.auth(1);
  }

  ngOnInit() {
  }

  hideDiv() {
    this.shouldHideDiv = !this.shouldHideDiv;
  }
}
