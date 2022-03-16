import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, switchMap, Subscription } from 'rxjs';

import { simulateFirebase } from '../../../../util'

@Component({
  selector: 'app-firebase-demo',
  templateUrl: './firebase-demo.component.html',
  styleUrls: ['./firebase-demo.component.css'],
})
export class FirebaseDemoComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  ngOnInit() {
    const firebase1$ = simulateFirebase('FB-1', 5000);
    const firebase2$ = simulateFirebase('FB-2', 1000);

    this.subscription.add(
      firebase1$.pipe(take(5)).subscribe({
        next: (x) => console.log(x),
        error: (err) => console.error(err),
        complete: () => console.log('firebase1$ complete'),
      })
    );

    this.subscription.add(
      firebase2$.pipe(take(5)).subscribe({
        next: (x) => console.log(x),
        error: (err) => console.error(err),
        complete: () => console.log('firebase2$ complete'),
      })
    );

    const firebaseResult$ = firebase1$.pipe(
      switchMap((sourceValue) => {
        console.log('source value ' + sourceValue);
        return simulateFirebase('inner observable', 1000);
      })
    );

    this.subscription.add(
      firebaseResult$.subscribe({
        next: (x) => console.log(x),
        error: (err) => console.error(err),
        complete: () => console.log('completed firebaseResult$'),
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.groupEnd();
  }
}
