import { Action, createReducer, on } from '@ngrx/store';

import { selectCarType } from '../../budget/car-type/car-type.actions';

export const availableMakesFeatureKey = 'availableMakes';

export type State = string[];

export const initialState: State = [
  'Acura',
  'Audi',
  'Honda',
  'Mazda'
];

const availableMakesReducer = createReducer(
  initialState,
  on(selectCarType, (state: State, { selected }) => {
    if (selected === 8 && state.indexOf('Ford') < 0) {
      return [...state, 'Ford'];
    }
    return state;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return availableMakesReducer(state, action);
}
