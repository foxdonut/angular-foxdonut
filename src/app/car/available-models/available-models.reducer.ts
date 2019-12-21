import { Action, createReducer, on } from '@ngrx/store';

import { selectCarMake } from '../make/make.actions';

export const availableModelsFeatureKey = 'availableModels';

export type State = string[];

export const initialState: State = [
  'Acura',
  'Audi',
  'Honda',
  'Mazda'
];

const availableModelsReducer = createReducer(
  initialState,
  on(selectCarMake, (state: State, { make }) => {
    console.log('select car make:', make);
    return state;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return availableModelsReducer(state, action);
}
