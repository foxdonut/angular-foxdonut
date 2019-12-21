import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/reducers';
import * as fromCar from '../reducers';
import * as fromAvailableMakes from '../available-makes/available-makes.reducer';
import * as fromAvailableModels from '../available-models/available-models.reducer';
import { selectCarMake } from '../make/make.actions';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  availableMakes: Observable<string[]>;
  availableModels: Observable<string[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.availableMakes = this.store.pipe(select(fromCar.carFeatureKey, fromAvailableMakes.availableMakesFeatureKey));
    this.availableModels = this.store.pipe(select(fromCar.carFeatureKey, fromAvailableModels.availableModelsFeatureKey));
  }

  onSelectMake(make: string) {
    this.store.dispatch(selectCarMake({ make }));
  }
}
