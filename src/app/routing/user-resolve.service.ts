import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RoutingUser } from './routing-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<RoutingUser> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<RoutingUser> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: route.params.id, name: 'Duck' });
      }, 1500);
    });
  }
}
