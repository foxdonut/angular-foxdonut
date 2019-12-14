import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment', props<{ amount: number }>());
export const reset = createAction('[Counter] Reset');
