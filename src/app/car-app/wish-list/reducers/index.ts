import { ActionReducerMap } from '@ngrx/store';
import { savedCarsFeatureKey, savedCarsReducer, SavedCarState } from '../saved-cars/saved-cars.reducer';

export const wishListFeatureKey = 'wishList';

export interface WishListState {
  [savedCarsFeatureKey]: SavedCarState;
}

export const wishListReducers: ActionReducerMap<WishListState> = {
  [savedCarsFeatureKey]: savedCarsReducer,
};
