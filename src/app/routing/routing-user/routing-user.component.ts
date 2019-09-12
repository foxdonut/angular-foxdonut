import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { RoutingUser } from '../routing-user.model';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styles: []
})
export class RoutingUserComponent implements OnInit {
  // This would normally be in a service
  users = {
    user_1: { id: 1, name: 'Duck' },
    user_2: { id: 2, name: 'Quack' }
  };
  user = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.user = this.users['user_' + this.route.snapshot.params.id];
    this.route.data.subscribe((data: Data) => {
      this.user = data.user;
    });
  }
}
