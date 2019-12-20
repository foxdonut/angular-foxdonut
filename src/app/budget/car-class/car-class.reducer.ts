import { Action, createReducer, on } from '@ngrx/store';
import { selectCarClass } from './car-class.actions';

export const carClassFeatureKey = 'carClass';

export interface State {
  selected: number;
}

export const initialState: State = {
  selected: null
};

const carClassReducer = createReducer(
  initialState,
  on(selectCarClass, (state, { selected }) => ({ ...state, selected }))
);

export function reducer(state: State | undefined, action: Action) {
  return carClassReducer(state, action);
}
