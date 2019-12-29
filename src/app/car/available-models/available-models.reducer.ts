import { Action, createReducer, on } from '@ngrx/store';

import { selectCarMake } from '../car/car.actions';

export const availableModelsFeatureKey = 'availableModels';

export type State = string[];

export const initialState: State = [];

const modelMap = {
  Acura: ['1.6 EL', 'Integra', 'RDX'],
  Audi: ['Q3', 'Q5'],
  Honda: ['Civic', 'CR-V', 'HR-V'],
  Mazda: ['3', '5', 'Protege'],
  Ford: ['F-150']
};

const availableModelsReducer = createReducer(
  initialState,
  on(selectCarMake, (state: State, { make }) => modelMap[make] || [])
);

export function reducer(state: State | undefined, action: Action) {
  return availableModelsReducer(state, action);
}
