import { createAction, createReducer, on, props } from '@ngrx/store';
import { createFormGroupState, FormGroupState, onNgrxForms } from 'ngrx-forms';

export const CHOICES = ['Internet', 'Phone', 'Word of mouth', 'Other'];
export const GENDERS = ['Female', 'Male', 'Non-binary'];

export const myNgrxFormFeatureKey = 'myNgrxForm';

export const FORM_ID = 'duck';
export const DYNAMIC_FORM_ID = 'dynamicForm';

export interface DynamicUiItem {
  id: number;
  dynamicType: string;
  label: string;
  defaultValue: any;
}

export interface DynamicUiActionProps {
  items: Array<DynamicUiItem>;
}

export const initDynamicUiAction = createAction(
  'initDynamicUiAction', props<DynamicUiActionProps>()
);

export interface MyNgrxFormState {
  email: string;
  username: string;
  password: string;
  howDidYouHear: string;
  gender: string;
}

export interface DynamicFormState {
  dynamic: Array<any>;
}

export interface ExampleNgrxFormState {
  other: string;
  formState: FormGroupState<MyNgrxFormState>;
  dynamicUi: Array<any>;
  dynamicForm?: FormGroupState<DynamicFormState>;
}

const initialState: ExampleNgrxFormState = {
  other: 'example',
  formState: createFormGroupState<MyNgrxFormState>(FORM_ID, {
    email: '',
    username: 'Duck',
    password: '',
    howDidYouHear: '',
    gender: ''
  }),
  dynamicUi: []
};

export const myNgrxFormReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(
    initDynamicUiAction,
    (state, { items }) => {
      const values = items.map(item => item.defaultValue);

      const dynamicForm = createFormGroupState<DynamicFormState>(
        DYNAMIC_FORM_ID,
        { dynamic: values }
      );

      return { ...state, dynamicUi: items, dynamicForm };
    }
  )
);
