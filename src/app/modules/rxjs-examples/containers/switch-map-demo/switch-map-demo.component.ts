import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap, Subscription } from 'rxjs';
import { simulateHttp } from '../../../../util';

@Component({
  selector: 'app-switch-map-demo',
  templateUrl: './switch-map-demo.component.html',
  styleUrls: ['./switch-map-demo.component.css'],
})
export class SwitchMapDemoComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  ngOnInit() {
    const saveUser$ = simulateHttp(' user saved', 2000);

    const httpResult$ = saveUser$.pipe(
      switchMap((sourceValue) => {
        console.log(`sourceValue ${sourceValue}`);
        return simulateHttp(' data reloaded', 2000);
      })
    );

    this.subscription.add(
      httpResult$.subscribe({
        next: (x) => console.log(x),
        error: (err) => console.error(err),
        complete: () => console.log('httpResult$ complete'),
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
