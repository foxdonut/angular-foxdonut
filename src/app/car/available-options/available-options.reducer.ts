import { Action, createReducer, on } from '@ngrx/store';

import { selectCarModel } from '../model/model.actions';

export const availableOptionsFeatureKey = 'availableOptions';

export type State = string[];

export const initialState: State = [];

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

const availableOptionsReducer = createReducer(
  initialState,
  on(selectCarModel, (state: State, { model }) => optionsMap[model] || [])
);

export function reducer(state: State | undefined, action: Action) {
  return availableOptionsReducer(state, action);
}
