import { createAction, props } from '@ngrx/store';

export const selectCarMake = createAction(
  '[Car] Select Make', props<{ make: string }>()
);

export const selectCarModel = createAction(
  '[Car] Select Model', props<{ model: string }>()
);

export const saveCar = createAction(
  '[Car] Save Car', props<{ car: { make: string, model: string, options: any } }>()
);
