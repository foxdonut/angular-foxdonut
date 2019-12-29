import { Action, createReducer, on } from '@ngrx/store';

import { saveCar } from '../../car/car/car.actions';

export const savedCarsFeatureKey = 'savedCars';

export type State = any[];

export const initialState: State = [];

const savedCarsReducer = createReducer(
  initialState,
  on(saveCar, (state: State) => {
    return state;
  })
);

export function reducer(state: State | undefined, action: Action) {
  return savedCarsReducer(state, action);
}
