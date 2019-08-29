import { EventEmitter } from '@angular/core';

export class UsernameService {
  takenUsernames = ['tarzan', 'jane'];
  usernameCreated = new EventEmitter<string>();

  constructor() { }

  usernameAvailable(username: string): boolean {
    return (this.takenUsernames.indexOf(username) === -1);
  }

  createUsername(username: string): void {
    this.takenUsernames.push(username);
  }

}