import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shouldHideDiv = false;

  constructor(private auth: AuthService) { 
    this.auth.auth(2);
  }

  ngOnInit() {
  }

  hideDiv() {
    this.shouldHideDiv = !this.shouldHideDiv;
  }
}
