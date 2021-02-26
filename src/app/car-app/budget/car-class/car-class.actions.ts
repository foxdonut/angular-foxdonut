import { createAction, props } from '@ngrx/store';

export const selectCarClass = createAction(
  '[CarClass] Select', props<{ selected: number }>()
);
