import { Component, Inject, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-username-log',
  templateUrl: './username-log.component.html',
  styles: []
})
export class UsernameLogComponent implements OnInit {
  logs = [];

  constructor(@Inject(UsernameService) private usernameService: UsernameService) { }

  ngOnInit() {
    this.usernameService.usernameCreated.subscribe(username => {
      this.logs.push(`Username ${username} has been created.`);
    });
  }

}
