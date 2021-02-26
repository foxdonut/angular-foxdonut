import { Action, createReducer, on } from '@ngrx/store';

import { saveCar, deleteCar } from '../../car/car.actions';

export const savedCarsFeatureKey = 'savedCars';

export type SavedCarState = any[];

const initialState: SavedCarState = [];

const reducer = createReducer(
  initialState,
  on(saveCar, (state: SavedCarState, { car }) => {
    return state.concat(car);
  }),
  on(deleteCar, (state: SavedCarState, { car }) => {
    const idx = state.findIndex(next => next.make === car.make && next.model === car.model);
    return state.slice(0, idx).concat(state.slice(idx + 1));
  })
);

export function savedCarsReducer(state: SavedCarState | undefined, action: Action) {
  return reducer(state, action);
}
