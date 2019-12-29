import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../reducers';
import * as fromWishList from '../reducers';
import * as fromSavedCars from '../saved-cars/saved-cars.reducer';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  savedCars$: Observable<any>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.savedCars$ = this.store.pipe(select(fromWishList.wishListFeatureKey, fromSavedCars.savedCarsFeatureKey))
  }

}
