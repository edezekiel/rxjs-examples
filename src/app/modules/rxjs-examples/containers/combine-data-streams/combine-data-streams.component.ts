import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  take,
  combineLatest,
  timer,
  forkJoin,
  withLatestFrom,
  Subscription,
} from 'rxjs';

import { simulateHttp } from '../../../../util'

@Component({
  selector: 'app-combine-data-streams',
  templateUrl: './combine-data-streams.component.html',
  styleUrls: ['./combine-data-streams.component.css'],
})
export class CombineDataStreamsComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  constructor() {}

  ngOnInit() {
    const saveUser$ = simulateHttp(' user saved', 2000);
    const http1$ = simulateHttp('1', 1000);
    const http2$ = simulateHttp('2', 3000);

    const timer$ = timer(1000, 1000).pipe(take(5));

    this.subscription.add(timer$.subscribe((x) => console.log('timer', x)));

    this.subscription.add(
      timer$
        .pipe(withLatestFrom(http1$, http2$))
        .subscribe((x) => console.log('withLatestFrom', x))
    );

    this.subscription.add(
      combineLatest([timer$, http2$, saveUser$])
        .pipe(take(5))
        .subscribe((x) => console.log('combineLatest', x))
    );

    this.subscription.add(
      forkJoin([timer$, http2$, saveUser$])
        .pipe(take(5))
        .subscribe((x) => console.log('forkjoin', x))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
