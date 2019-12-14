# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# NgRx Setup

[NgRx](https://ngrx.io/) is a reactive state manager for Angular. Here is how to set it up.

## Installation

Install the NgRx package and add it to the Angular project:

```
ng add @ngrx/store
```

This adds NgRx's `StoreModule` to `app.module.ts`:

```typescript
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ]
```

This also creates `app/reducers/index.ts`:

```typescript
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
```

## Defining State

In `reducers/index.ts`, define the shape of the application state. For example, let's build a simple
counter example.

```typescript
export interface State {
  counter: number;
}
```

## Creating Actions

Create actions in `counter/counter.actions.ts`:

```typescript
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
```

## Creating Reducers

Create a reducer in `counter/counter.reducer.ts`. Notice that the reducer operates on its part of
the state only, `counter`, without having to know about it.

```typescript
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const counterReducerFn = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return counterReducerFn(state, action);
}
```

## Setup Reducers

## Creating the Component

Create the `counter` component:

```
ng g c counter
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/ngrx-setup?file=src%2Fapp%2Fservices%2Fusername.service.ts)

[Contents](../README.md#angular-foxdonut)

