import { Action, createReducer, on } from '@ngrx/store';

import { selectCarMake } from '../car.actions';

export const availableModelsFeatureKey = 'availableModels';

export type CarModelState = string[];

const initialState: CarModelState = [];

const modelMap = {
  Acura: ['1.6 EL', 'Integra', 'RDX'],
  Audi: ['Q3', 'Q5'],
  Honda: ['Civic', 'CR-V', 'HR-V'],
  Mazda: ['3', '5', 'Protege'],
  Ford: ['F-150']
};

const reducer = createReducer(
  initialState,
  on(selectCarMake, (state: CarModelState, { make }) => modelMap[make] || [])
);

export function availableModelsReducer(state: CarModelState | undefined, action: Action) {
  return reducer(state, action);
}
