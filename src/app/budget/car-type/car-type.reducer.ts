import { Action, createReducer, on } from '@ngrx/store';
import { selectCarType } from './car-type.actions';

export const carTypeFeatureKey = 'carType';

export interface State {
  selected: number;
}

export const initialState: State = {
  selected: null
};

const carTypeReducer = createReducer(
  initialState,
  on(selectCarType, (state, { selected }) => ({ ...state, selected }))
);

export function reducer(state: State | undefined, action: Action) {
  return carTypeReducer(state, action);
}
