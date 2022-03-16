import { Component, OnInit } from '@angular/core';
import { catchError, combineLatest, EMPTY } from 'rxjs';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css'],
})
export class SubjectDemoComponent implements OnInit {
  users$ = this.userService.users$.pipe(
    catchError((err) => {
      alert(err);
      return EMPTY;
    })
  );

  selectedUser$ = this.userService.selectedUser$;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSelected(userId: number) {
    this.userService.selectedUserChange(userId);
  }
}
