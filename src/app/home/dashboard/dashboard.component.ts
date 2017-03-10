import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { NotificationService } from '../../shared/notification.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PostsService]
})
export class DashboardComponent implements OnInit {

  posts = [];
  postsSubs = null;
  shouldHideDiv = false;
  counter = 90;

  constructor(private auth: AuthService, private postsService: PostsService,
    private notificationService: NotificationService) { 
    this.auth.auth(2);
  }

  ngOnInit() {
    this.postsService.getAll().subscribe((posts) => this.posts = posts);
    this.postsSubs = this.postsService.getAll();
    this.notificationService.publishedNotification$.subscribe((confirmation) => {
      console.log(confirmation);
    });
  }

  hideDiv() {
    this.shouldHideDiv = !this.shouldHideDiv;
  }

  sendNotification() {
    this.counter++;
    this.notificationService.publishNotification('NEW NOTIFCATION ' + this.counter);
  }
}
