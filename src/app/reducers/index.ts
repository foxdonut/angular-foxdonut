// import { counterReducer } from '../counter/counter.reducer';

import * as fromBudget from '../budget/reducers';
import * as fromCar from '../car/reducers';
import * as fromWishList from '../wish-list/reducers';

export interface State {
  // counter: number;
  [fromBudget.budgetFeatureKey]: fromBudget.State;
  [fromCar.carFeatureKey]: fromCar.State;
  [fromWishList.wishListFeatureKey]: fromWishList.State;
}

/*
export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  [fromBudget.budgetFeatureKey]: fromBudget.State;
  [fromCar.carFeatureKey]: fromCar.State;
  [fromWishList.wishListFeatureKey]: fromWishList.State;
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
*/
