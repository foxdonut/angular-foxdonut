import { counterFeatureKey } from '../counter/counter.reducer';
import { budgetFeatureKey, BudgetState } from '../car-app/budget/reducers';
import { carFeatureKey, CarState } from '../car-app/car/reducers';
import { wishListFeatureKey, WishListState } from '../car-app/wish-list/reducers';

export interface State {
  [counterFeatureKey]: number;
  [budgetFeatureKey]: BudgetState;
  [carFeatureKey]: CarState;
  [wishListFeatureKey]: WishListState;
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
