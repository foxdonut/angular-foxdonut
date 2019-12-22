import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromMake from '../make/make.reducer';
import * as fromModel from '../model/model.reducer';
import * as fromAvailableMakes from '../available-makes/available-makes.reducer';
import * as fromAvailableModels from '../available-models/available-models.reducer';
import * as fromOptions from '../options/options.reducer';
import * as fromAvailableOptions from '../available-options/available-options.reducer';

export const carFeatureKey = 'car';

export interface State {
  [fromMake.makeFeatureKey]: fromMake.State;
  [fromModel.modelFeatureKey]: fromModel.State;
  [fromAvailableMakes.availableMakesFeatureKey]: fromAvailableMakes.State;
  [fromAvailableModels.availableModelsFeatureKey]: fromAvailableModels.State;
  [fromOptions.optionsFeatureKey]: fromOptions.State;
  [fromAvailableOptions.availableOptionsFeatureKey]: fromAvailableOptions.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromMake.makeFeatureKey]: fromMake.reducer,
  [fromModel.modelFeatureKey]: fromModel.reducer,
  [fromAvailableMakes.availableMakesFeatureKey]: fromAvailableMakes.reducer,
  [fromAvailableModels.availableModelsFeatureKey]: fromAvailableModels.reducer,
  [fromOptions.optionsFeatureKey]: fromOptions.reducer,
  [fromAvailableOptions.availableOptionsFeatureKey]: fromAvailableOptions.reducer,
};
