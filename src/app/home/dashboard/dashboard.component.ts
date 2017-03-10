import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
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

  constructor(private auth: AuthService, private postsService: PostsService) { 
    this.auth.auth(2);
  }

  ngOnInit() {
    this.postsService.getAll().subscribe((posts) => this.posts = posts);
    this.postsSubs = this.postsService.getAll();
  }

  hideDiv() {
    this.shouldHideDiv = !this.shouldHideDiv;
  }
}
