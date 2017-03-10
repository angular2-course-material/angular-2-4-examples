import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
