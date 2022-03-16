import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { users, simulateHttp } from '../../util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$ = simulateHttp(users, 2000);

  private userSelectedSubject = new BehaviorSubject<number>(0);
  userSelectedAction$ = this.userSelectedSubject.asObservable();

  selectedUser$ = combineLatest([this.users$, this.userSelectedAction$]).pipe(
    map(([users, selectedId]) => users.find((u) => u.id === selectedId)),
    tap((u) => console.log('selectedUser', u))
  );

  constructor() {}

  selectedUserChange(userId: number) {
    console.log('selectedUserChange, userId = ', userId);
    this.userSelectedSubject.next(+userId);
  }
}
