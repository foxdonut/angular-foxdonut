import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/reducers';
import { State as CarState } from 'src/app/car/reducers';

import * as fromCar from '../reducers';
import { selectCarMake } from '../make/make.actions';
import { selectCarModel } from '../model/model.actions';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  state$: Observable<CarState>;
  selectedOptions: Record<string, boolean> = {};

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.state$ = this.store.pipe(select(fromCar.carFeatureKey));
  }

  onSelectMake(make: string) {
    this.store.dispatch(selectCarMake({ make }));
  }

  onSelectModel(model: string) {
    this.store.dispatch(selectCarModel({ model }));
  }
}
