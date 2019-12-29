import { Action, createReducer, on } from '@ngrx/store';

import { saveCar, deleteCar } from '../../car/car/car.actions';

export const savedCarsFeatureKey = 'savedCars';

export type State = any[];

export const initialState: State = [];

const savedCarsReducer = createReducer(
  initialState,
  on(saveCar, (state: State, { car }) => {
    return state.concat(car);
  }),
  on(deleteCar, (state: State, { car }) => {
    const idx = state.findIndex(next => next.make === car.make && next.model === car.model);
    return state.slice(0, idx).concat(state.slice(idx + 1));
  })
);

export function reducer(state: State | undefined, action: Action) {
  return savedCarsReducer(state, action);
}
