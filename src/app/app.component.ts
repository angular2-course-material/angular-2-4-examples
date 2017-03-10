import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  observable;
  subscription;
  values = [];

  constructor() {
    this.observable = new Observable(observer => {
      setTimeout(() => {
          observer.next(42);
      }, 1000);

      setTimeout(() => {
          observer.next(43);
      }, 2000);

      setTimeout(() => {
          observer.next(44);
      }, 4000);

      setTimeout(() => {
          observer.complete();
      }, 6000);
    });
  }

  ngOnInit() {
    this.subscription = this.observable.subscribe(
      value => this.values.push(value),
      error => console.log('Error: ', error),
      () => console.log('FINISHED')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
