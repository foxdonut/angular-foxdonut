import { Action, createReducer, on } from '@ngrx/store';


export const carClassFeatureKey = 'carClass';

export interface State {

}

export const initialState: State = {

};

const carClassReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return carClassReducer(state, action);
}
