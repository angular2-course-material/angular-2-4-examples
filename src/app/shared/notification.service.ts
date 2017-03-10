import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NotificationService {
// Observable string sources
  private notificationPublisherSource = new Subject<string>();
  private publishedNotificationSource = new Subject<string>();
  // Observable string streams
  notificationPublisher$ = this.notificationPublisherSource.asObservable();
  publishedNotification$ = this.publishedNotificationSource.asObservable();

  constructor() { 
    console.log('init NotificationService');
  }
  // Service message commands
  publishNotification(mission: string) {
    this.notificationPublisherSource.next(mission);
  }

  confirmPublication(astronaut: string) {
    this.publishedNotificationSource.next(astronaut);
  }

}
