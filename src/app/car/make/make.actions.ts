import { createAction, props } from '@ngrx/store';

export const selectCarMake = createAction(
  '[CarMake] Select', props<{ make: string }>()
);
