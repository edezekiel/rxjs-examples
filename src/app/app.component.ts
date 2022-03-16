import { Component, OnDestroy } from '@angular/core';
import { Event, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  private subscription = new Subscription();

  constructor(router: Router) {
    this.subscription.add(
      router.events.subscribe((routerEvent: Event) => {
        console.clear();
      })
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
