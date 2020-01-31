# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# NgRx Effects

NgRx Effects executes side effects, typically after actions have been dispatched. Effects are not
limited to dispatched actions, however. They can act upon any observable that produces actions, such
as from Angular Router, from browser events, and other sources.

## Setup

Add NgRx Effects to the project:

```
ng add @ngrx/effects
```

This should also add `EffectsModule` to the `imports` of `app.module.ts`:

```typescript
imports: [
  EffectsModule.forRoot([AppEffects])
]
```

`AppEffects` looks initially like this:

```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
}
```

> It is advisable to stop the Angular development server while working on side effects to avoid
> creating infinite loops.

## Side Effect without next Action

An effect may or may not dispatch next actions. When there is no next action, we must explicitly
specify so. Here is a basic such effect:

```typescript
login$ = createEffect(() => {
  this.actions$
      .pipe(
        ofType(MyActions.someAction),
        tap(action => {
          // use action payload to perform some side effect
        })
      )
}, { dispatch: false });
```

## Using an Effect to Load Data

We can use an effect to load data when an action requesting that data has been dispatched:

```typescript
load$ = createEffect(
  () => this.action$
    .pipe(
      ofType(loadAll),
      concatMap(action => this.httpService.loadAll(action.param)),
      map(data => allDataLoaded({ data })) // action creator
    )
);
```

## Handling Errors

Effects are listeners of observable streams that continue until an error or completion occurs. In
order for effects to continue running in the event of an error in the observable, or completion of
the observable stream, they must be nested within a "flattening" operator, such as `mergeMap`,
`concatMap`, `exhaustMap` and other flattening operators.
([Source](https://ngrx.io/guide/effects#handling-errors))

```typescript
loadMovies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadMovies),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => moviesLoadSuccess({ movies })),
        catchError(() => moviesLoadError())
      )
    )
  )
);
```

[Contents](../README.md#angular-foxdonut)
