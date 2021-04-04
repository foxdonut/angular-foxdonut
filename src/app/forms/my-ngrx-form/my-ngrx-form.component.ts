import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { CHOICES, GENDERS, myNgrxFormFeatureKey, MyNgrxFormState } from './my-ngrx-form.reducer';

@Component({
  selector: 'app-my-ngrx-form',
  templateUrl: './my-ngrx-form.component.html'
})
export class MyNgrxFormComponent {
  formState$: Observable<FormGroupState<MyNgrxFormState>>;
  dynamicUi$: Observable<any>;
  choices = CHOICES;
  genders = GENDERS;

  constructor(private readonly store: Store) {
    this.formState$ = store.pipe(select(state => state[myNgrxFormFeatureKey].formState));
    this.dynamicUi$ = store.pipe(select(state => state[myNgrxFormFeatureKey].dynamicUi));
  }
}
