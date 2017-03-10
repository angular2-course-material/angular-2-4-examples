import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification: string;
  count = 0;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notificationPublisher$.subscribe((notification) => {
      console.log(notification);
      this.notification = notification;
      this.count++;
      this.notificationService.confirmPublication('confirmed!!! ' + this.count);
    })
  }

}
