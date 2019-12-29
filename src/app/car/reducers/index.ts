import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromAvailableMakes from '../available-makes/available-makes.reducer';
import * as fromAvailableModels from '../available-models/available-models.reducer';
import * as fromAvailableOptions from '../available-options/available-options.reducer';

export const carFeatureKey = 'car';

export interface State {
  [fromAvailableMakes.availableMakesFeatureKey]: fromAvailableMakes.State;
  [fromAvailableModels.availableModelsFeatureKey]: fromAvailableModels.State;
  [fromAvailableOptions.availableOptionsFeatureKey]: fromAvailableOptions.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromAvailableMakes.availableMakesFeatureKey]: fromAvailableMakes.reducer,
  [fromAvailableModels.availableModelsFeatureKey]: fromAvailableModels.reducer,
  [fromAvailableOptions.availableOptionsFeatureKey]: fromAvailableOptions.reducer,
};
