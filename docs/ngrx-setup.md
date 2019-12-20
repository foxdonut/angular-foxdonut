# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# NgRx Setup

[NgRx](https://ngrx.io/) is a reactive state manager for Angular. Here is how to set it up.

## Installation

Install the NgRx package and add it to the Angular project:

```
ng add @ngrx/store
ng add @ngrx/effects
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

Next, to add NgRX CLI support, add `schematics` to the project:

```
ng add @ngrx/schematics
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
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment', props<{ amount: number }>());
export const reset = createAction('[Counter] Reset');
```

## Creating Reducers

Create a reducer in `counter/counter.reducer.ts`. Notice that the reducer operates on its part of
the state only, `counter`, without having to know about it.

```typescript
import { createReducer, on } from '@ngrx/store';
import { increment, reset } from './counter.actions';

export const initialState = 0;

const counterReducerFn = createReducer(initialState,
  on(increment, (state, { amount }) => state + amount),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return counterReducerFn(state, action);
}
```

## Setup Reducers

To setup the reducer, indicate the state property on which it operates in `reducers/index.ts`:

```typescript
import { counterReducer } from '../counter/counter.reducer';

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};
```

## Using the Store in a Component

Create the `counter` component:

```
ng g c counter
```

To use the Store in the component, import `Store` and `select` from NgRx to select the property from
the store. Inject the Store in the constructor, and set up an Observable using `store.pipe` and
`select`:

```typescript
import { Store, select } from '@ngrx/store';

export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(select(state => state.counter));
  }
}
```

Add the actions using `store.dispatch`:

```typescript
import { increment, reset } from './counter.actions';

export class CounterComponent implements OnInit {
  increment() {
    this.store.dispatch(increment({ amount: 1 }));
  }

  decrement() {
    this.store.dispatch(increment({ amount: -1 }));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
```

Use the actions as regular component methods in the template, and use `counter$` with `| async`:

```html
<div>Counter: {{ counter$ | async }}

<div>
  <button class="btn btn-primary btn-sm" (click)="increment()">Increment</button>
  <button class="btn btn-primary btn-sm" (click)="decrement()">Decrement</button>
  <button class="btn btn-danger btn-sm" (click)="reset()">Reset</button>
</div>
```

> For better separation of concerns, use a Service. See the example below. Also note that this
> example works in the `ngrx-setup` branch only, it is commented out going forward to make room for
> a bigger NgRx example.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/ngrx-setup?file=src%2Fapp%2Fcounter%2Fcounter.service.ts)

[Contents](../README.md#angular-foxdonut)
