import { createAction, props } from '@ngrx/store';

export const selectCarModel = createAction(
  '[CarModel] Select', props<{ model: string }>()
);

