import { Action, createReducer, on } from '@ngrx/store';

import { selectCarModel } from '../car.actions';

export const availableOptionsFeatureKey = 'availableOptions';

export type CarOptionState = string[];

const initialState: CarOptionState = [];

const optionsMap = {
  '1.6 EL': ['Leather Seats'],
  Integra: ['Leather Seats', 'Turbo'],
  RDX: ['Leather Seats', 'Step'],
  Q3: ['Rear camera'],
  Q5: ['Per key settings', 'Rear camera'],
  Civic: ['Spoiler', 'Turbo'],
  'CR-V': ['AWD'],
  'HR-V': ['AWD'],
  3: ['Turbo'],
  5: ['Turbo'],
  Protege: ['Turbo'],
  'F-150': ['Luxury Package']
};

const reducer = createReducer(
  initialState,
  on(selectCarModel, (state: CarOptionState, { model }) => optionsMap[model] || [])
);

export function availableOptionsReducer(state: CarOptionState | undefined, action: Action) {
  return reducer(state, action);
}
