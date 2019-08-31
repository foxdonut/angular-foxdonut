import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  // tslint:disable-next-line
  @Input('my-user') user: User;
  // tslint:disable-next-line
  @Output('edit-user') editUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  saveUser(id: number, usernameInput: HTMLInputElement) {
    const username = usernameInput.value;
    this.editUser.emit({ id, username });
  }
}
