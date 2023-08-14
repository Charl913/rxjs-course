import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, concat, interval, merge, of } from 'rxjs';
import { createHttpObservable } from '../../util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const http$ = createHttpObservable('/api/courses');

    const sub = http$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 0);
  }
}
