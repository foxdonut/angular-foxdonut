import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/reducers';
import { wishListFeatureKey } from '../reducers';
import { savedCarsFeatureKey } from '../saved-cars/saved-cars.reducer';
import { editCar, deleteCar } from '../../car/car.actions';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  savedCars$: Observable<any>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.savedCars$ = this.store.pipe(select(wishListFeatureKey, savedCarsFeatureKey));
  }

  onEdit(car: any) {
    this.store.dispatch(editCar({ car }));
  }

  onDelete(car: any) {
    this.store.dispatch(deleteCar({ car }));
  }
}
