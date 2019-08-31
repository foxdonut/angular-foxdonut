import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styles: []
})
export class ComponentCommunicationComponent implements OnInit {
  items = [];
  users: User[] = [
    {id: 1, username: 'Fox'},
    {id: 2, username: 'Donut'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddItem(myInput: HTMLInputElement) {
    this.items.push(myInput.value);
    myInput.value = '';
  }

  onEditUser(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
  }
}
