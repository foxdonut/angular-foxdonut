import { Action, createReducer, on } from '@ngrx/store';


export const carTypeFeatureKey = 'carType';

export interface State {

}

export const initialState: State = {

};

const carTypeReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return carTypeReducer(state, action);
}
