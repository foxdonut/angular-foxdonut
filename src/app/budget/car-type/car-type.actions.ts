import { createAction, props } from '@ngrx/store';

export const selectCarType = createAction(
  '[CarType] Select', props<{ selected: number }>()
);
