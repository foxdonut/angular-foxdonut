import { createReducer } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';

export const CHOICES = ['Internet', 'Phone', 'Word of mouth', 'Other'];
export const GENDERS = ['Female', 'Male', 'Non-binary'];

export const myNgrxFormFeatureKey = 'myNgrxForm';

export const FORM_ID = 'duck';

export interface MyNgrxFormState {
  email: string;
  username: string;
  password: string;
  howDidYouHear: string;
  gender: string;
  dynamic: Array<any>;
}

export interface ExampleNgrxFormState {
  other: string;
  formState: FormGroupState<MyNgrxFormState>;
  dynamicUi: Array<any>;
}

const initialState: ExampleNgrxFormState = {
  other: 'example',
  formState: createFormGroupState<MyNgrxFormState>(FORM_ID, {
    email: '',
    username: 'Duck',
    password: '',
    howDidYouHear: '',
    gender: '',
    dynamic: [
      false,
      ''
    ]
  }),
  dynamicUi: [
    { id: 42, dynamicType: 'checkbox', label: 'Dynamic checkbox' },
    { id: 24, dynamicType: 'text', label: 'Dynamic text field' }
  ]
};

export const myNgrxFormReducer = createReducer(
  initialState,
  onNgrxForms()
);
