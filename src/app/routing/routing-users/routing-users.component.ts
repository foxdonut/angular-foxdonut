import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Event, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styles: []
})
export class RoutingUsersComponent implements OnInit {
  // This would normally be in a service
  users = [
    { id: 1, name: 'Duck' },
    { id: 2, name: 'Quack' }
  ];
  message = null;
  loading = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      if (queryParams.message === '1') {
        this.message = 'You are not allowed to view this user.';
      } else {
        this.message = null;
      }
    });

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = 'Loading, please wait...';
      } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel) {
        this.loading = null;
      }
    });
  }
}
