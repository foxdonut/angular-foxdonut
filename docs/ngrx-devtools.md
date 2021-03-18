# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# NgRx DevTools

NgRx DevTools allows us to inspect the store and view/replay actions during development using the
browser's devtools.

## Setup

Add NgRx DevTools to the project:

```
ng add @ngrx/store-devtools
```

Then install the extension for your browser from http://extension.remotedev.io.

## Using DevTools

With our app running, we can use the DevTools in the browser to see dispatched actions, state diffs,
and store contents. We can rewind and replay actions and see the results in the app.

## Strict Immutability

For the DevTools to work correctly, and to run Angular using OnPush Change Detection (see below), we
need to make sure that we never mutate the state in our reducers. To enforce this, we can set a flag
in the Store Module.

> Note: this additional configuration is not needed in later versions of NgRx as it is the default.

```typescript
StoreModule.forRoot(reducers, {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true
  }
})
```

This will throw an error if we mutate the state in a reducer, or if we mutate an action.

Other settings include `strictActionSerializability` and `strictStateSerializability`.

## OnPush Change Detection

Because using NgRx means that state is immutable, we can configure Angular to use OnPush Change
Detection. Especially when managing a considerable amount of data, this will result in better
performance. Components are updated in a more efficient way.

A component can use OnPush Change detection with this setting:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

## Meta Reducers

Meta reducers run before regular reducers. A meta reducer receives a reducer function as a parameter
and returns a reducer function. Thus it can control what to do before and after calling the regular
reducer function, such as logging:

```typescript
function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state before:', state);
    const result = reducer(state, action);
    console.log('state after:', result);
    return result;
  }
}

export const metaReducers: MetaReducer<AppState>[] =
  environment.production: [] : [logger];
```

[Contents](../README.md#angular-foxdonut)
