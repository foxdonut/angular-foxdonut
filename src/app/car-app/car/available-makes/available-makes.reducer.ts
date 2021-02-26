import { Action, createReducer, on } from '@ngrx/store';

import { selectCarType } from '../../budget/car-type/car-type.actions';

export const availableMakesFeatureKey = 'availableMakes';

export type CarMakeState = string[];

const initialState: CarMakeState = [
  'Acura',
  'Audi',
  'Honda',
  'Mazda'
];

const reducer = createReducer(
  initialState,
  on(selectCarType, (state: CarMakeState, { selected }) => {
    if (selected === 8) {
      return (state.indexOf('Ford') < 0) ? [...state, 'Ford'] : state;
    } else {
      return (state.indexOf('Ford') >= 0) ? state.slice(0, state.length - 1) : state;
    }
  })
);

export function availableMakesReducer(state: CarMakeState | undefined, action: Action) {
  return reducer(state, action);
}
