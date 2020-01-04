import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/reducers';
import { State as CarState } from 'src/app/car/reducers';

import * as fromCar from '../reducers';
import * as fromAvailableOptions from '../available-options/available-options.reducer';
import { selectCarMake, selectCarModel, saveCar } from './car.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { CarEntityService } from '../car-entity.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  state$: Observable<CarState>;
  form: FormGroup;
  availableOptions: string[] = [];

  constructor(private store: Store<State>, private carEntityService: CarEntityService) { }

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

    this.carEntityService.getAll();
  }

  /*
  (Edit) Select Make:
  - Set selected make on form
  - Load available models
  - trigger action for available models
  Select Model:
  - Set selected model on form
  - Load available options
  - trigger action for available options
  - Set selected options on form

  Save:
  - Clear form
  - Clear available options
  - Clear available models
  - Clear available makes
  */

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
