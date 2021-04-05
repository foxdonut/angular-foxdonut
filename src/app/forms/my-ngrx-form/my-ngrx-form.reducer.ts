import { createAction, createReducer, on, props } from '@ngrx/store';
import {
  createFormGroupState,
  disable,
  enable,
  FormGroupState,
  onNgrxForms,
  updateArray,
  updateGroup
} from 'ngrx-forms';

export const CHOICES = ['Internet', 'Phone', 'Word of mouth', 'Other'];
export const GENDERS = ['Female', 'Male', 'Non-binary'];

export const myNgrxFormFeatureKey = 'myNgrxForm';

export const FORM_ID = 'duck';
export const DYNAMIC_FORM_ID = 'dynamicForm';

export interface DynamicUiOptionItem {
  id: number;
  optionValue: string;
  text: string;
  defaultOption: boolean;
}

export interface DynamicUiItem {
  id: number;
  dynamicType: string;
  label: string;
  defaultValue: string | boolean | null;
  options?: Array<DynamicUiOptionItem>;
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

export interface CheckTextState {
  check: boolean;
  text: string;
}

export type DynamicFormValueState = string | boolean | Array<CheckTextState> | null;

export interface DynamicFormState {
  dynamic: Array<DynamicFormValueState>;
}

export interface ExampleNgrxFormState {
  other: string;
  formState: FormGroupState<MyNgrxFormState>;
  dynamicUi: Array<DynamicUiItem>;
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
  // dynamicForm populated after init
};

const checkTextFormGroupReducer = updateGroup<DynamicFormState>({
  dynamic: updateArray((arrState) => {
    return arrState;
  })
});

const ngrxFormReducer = createReducer(
  initialState,
  onNgrxForms(),
  on(
    initDynamicUiAction,
    (state, { items }) => {
      const values = items.map(item => item.options
        ? item.options.map(option => ({
          check: option.defaultOption,
          text: option.text
        }))
        : item.defaultValue);

      const dynamicForm = createFormGroupState<DynamicFormState>(
        DYNAMIC_FORM_ID,
        { dynamic: values }
      );

      return { ...state, dynamicUi: items, dynamicForm };
    }
  )
);

export const myNgrxFormReducer = (state, action) => {
  let updatedState = ngrxFormReducer(state, action);
  if (updatedState.dynamicForm) {
    updatedState = { ...updatedState, dynamicForm: checkTextFormGroupReducer(updatedState.dynamicForm) };
  }
  return updatedState;
};
