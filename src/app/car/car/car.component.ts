import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/reducers';
import { State as CarState } from 'src/app/car/reducers';

import * as fromCar from '../reducers';
import * as fromAvailableOptions from '../available-options/available-options.reducer';
import { selectCarMake, selectCarModel, saveCar } from './car.actions';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  state$: Observable<CarState>;
  form: FormGroup;
  availableOptions: string[] = [];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.state$ = this.store.pipe(select(fromCar.carFeatureKey));
    this.form = new FormGroup({
      make: new FormControl(''),
      model: new FormControl(''),
      options: new FormGroup({})
    });
    this.store
      .pipe(select(fromCar.carFeatureKey, fromAvailableOptions.availableOptionsFeatureKey))
      .subscribe((options: string[]) => {
        const formGroup = this.form.get('options') as FormGroup;
        this.availableOptions.forEach(option => formGroup.removeControl(option));
        options.forEach(option => formGroup.addControl(option, new FormControl(false)));
        this.availableOptions = options;
      });
  }

  onSelectMake(make: string) {
    this.form.get('make').setValue(make);
    this.store.dispatch(selectCarMake({ make }));
  }

  onSelectModel(model: string) {
    this.form.get('model').setValue(model);
    this.store.dispatch(selectCarModel({ model }));
  }

  save() {
    this.store.dispatch(saveCar({ car: this.form.value }));
  }
}
