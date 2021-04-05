import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { CHOICES, DynamicFormState, GENDERS, initDynamicUiAction, myNgrxFormFeatureKey, MyNgrxFormState } from './my-ngrx-form.reducer';

@Component({
  selector: 'app-my-ngrx-form',
  templateUrl: './my-ngrx-form.component.html'
})
export class MyNgrxFormComponent implements OnInit {
  formState$: Observable<FormGroupState<MyNgrxFormState>>;
  dynamicUi$: Observable<any>;
  dynamicForm$: Observable<FormGroupState<DynamicFormState>>;
  choices = CHOICES;
  genders = GENDERS;

  constructor(private readonly store: Store) {
    this.formState$ = store.pipe(select(state => state[myNgrxFormFeatureKey].formState));
    this.dynamicUi$ = store.pipe(select(state => state[myNgrxFormFeatureKey].dynamicUi));
    this.dynamicForm$ = store.pipe(select(state => state[myNgrxFormFeatureKey].dynamicForm));
  }

  ngOnInit(): void {
    const items = [
      { id: 142, dynamicType: 'checkbox', label: 'Dynamic checkbox 1', defaultValue: null },
      { id: 224, dynamicType: 'text', label: 'Dynamic text field 1', defaultValue: null },
      { id: 42, dynamicType: 'checkbox', label: 'Dynamic checkbox 2', defaultValue: true },
      { id: 24, dynamicType: 'text', label: 'Dynamic text field 2', defaultValue: 'Yes' },
      { id: 840, dynamicType: 'checktext', label: 'Your Options', defaultValue: null, options: [
        { id: 2840, optionValue: 'Netflix', text: 'Because everyone has it', defaultOption: true },
        { id: 2841, optionValue: 'Amazon', text: 'Only place for some shows', defaultOption: false },
        { id: 2842, optionValue: 'Crave', text: 'This one might be Canadian', defaultOption: false },
        { id: 2843, optionValue: 'Hulu', text: 'What a fun name', defaultOption: false }
      ]}
    ];
    this.store.dispatch(initDynamicUiAction({ items }));
  }
}
