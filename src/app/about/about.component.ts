import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const http$ = Observable.create(observer => {
      fetch('/api/courses')
        .then(response => {
          return response.json();
        })
        .then(body => {
          observer.next(body);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
          
        })
    });

    http$.subscribe(
      courses => console.log(courses),
      () => {},
      () => console.log('Completed')
    );
  }

}
