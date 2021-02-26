import { ActionReducerMap, } from '@ngrx/store';
import { availableMakesFeatureKey, availableMakesReducer, CarMakeState } from '../available-makes/available-makes.reducer';
import { availableModelsFeatureKey, availableModelsReducer, CarModelState } from '../available-models/available-models.reducer';
import { availableOptionsFeatureKey, availableOptionsReducer, CarOptionState } from '../available-options/available-options.reducer';

export const carFeatureKey = 'car';

export interface CarState {
  [availableMakesFeatureKey]: CarMakeState;
  [availableModelsFeatureKey]: CarModelState;
  [availableOptionsFeatureKey]: CarOptionState;
}

export const carReducers: ActionReducerMap<CarState> = {
  [availableMakesFeatureKey]: availableMakesReducer,
  [availableModelsFeatureKey]: availableModelsReducer,
  [availableOptionsFeatureKey]: availableOptionsReducer
};
