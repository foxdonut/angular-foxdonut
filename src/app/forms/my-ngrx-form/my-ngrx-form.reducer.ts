import { createReducer } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';

type Choice = '' | 'Internet' | 'Phone' | 'Word of mouth' | 'Other';
type Gender = '' | 'Female' | 'Male' | 'Non-binary';

export const myNgrxFormFeatureKey = 'myNgrxForm';

export const FORM_ID = 'duck';

export interface MyNgrxFormState {
  email: string;
  username: string;
  password: string;
  howDidYouHear: Choice;
  gender: Gender;
}

export interface ExampleNgrxFormState {
  other: string;
  formState: FormGroupState<MyNgrxFormState>;
}

const initialState: ExampleNgrxFormState = {
  other: 'example',
  formState: createFormGroupState<MyNgrxFormState>(FORM_ID, {
    email: '',
    username: '',
    password: '',
    howDidYouHear: '',
    gender: ''
  })
};

export const myNgrxFormReducer = createReducer(
  initialState,
  onNgrxForms()
);
