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

> The effect must be created outside of the constructor, i.e. as a class property as shown above.

## A Note about RxJs Flattening Operators

Effects are listeners of observable streams that continue until an error or completion occurs. In
order for effects to continue running in the event of an error in the observable, or completion of
the observable stream, they must be nested within a "flattening" operator, such as `mergeMap`,
`concatMap`, `exhaustMap` and other flattening operators.
([Reference](https://ngrx.io/guide/effects#handling-errors))

Flattening operators automatically subscribe to nested observables, using a different strategy
depending on the operator:

- `mergeMap`: subscribes to each observable as they arrive. Values from the observables may be
  interlaced.
- `concatMap`: waits until the current observable has finished before subscribing to the next
  observable.
- `switchMap`: unsubscribes from the current observable as soon as the next observable arrives.
- `exhaustMap`: only subscribes to the next observable after the current observable has finished,
  ignoring any observables that arrive in the meantime.

For example: imagine that 4 actions arrive from the `action$` observable, in order: action1,
action2, action3, action4.

Each action triggers an http request, which is an observable. Flattening operators automatically
subscribe to this observable and flatten the response into the parent.

Now, imagine that the responses from the http requests triggered by the actions arrive in a
different order: response2, response1, response4, response3.

Which responses are emitted into the parent observable depend on the the flattening operator:

- `mergeMap`: response2, response1, response4, response3
    - in order of responses, which may be different from the order of actions.
- `concatMap`: response1, response2, response3, response4
    - order of responses is kept in the same order as order of actions.
- `switchMap`: response2, response4
    - unsubscribed from response1 because response2 arrived sooner; unsubscribed from response3
      because response4 arrived sooner.
- `exhaustMap`: response1, response3
    - waited for response1 to arrive before subscribing to the next observable. Since response2
      arrived in the meantime, it was ignored and subscription was to response3 instead. Then
      response4 was ignored because it arrived while waiting for response3.

## Using an Effect to Load Data

We can use an effect to load data when an action requesting that data has been dispatched:

```typescript
load$ = createEffect(
  () => this.action$
    .pipe(
      ofType(loadAll),
      mergeMap(action => this.httpService.loadAll(action.param)),
      map(data => allDataLoaded({ data })) // action creator
    )
);
```

## Handling Errors

We can use `catchError` to handle errors and `of` to return an observable with the action that we
want to dispatch:

```typescript
loadMovies$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadMovies),
    exhaustMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => moviesLoadSuccess({ movies })),
        catchError(() => of(moviesLoadError()))
      )
    )
  )
);
```

Here is another example:

```typescript
login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LoginPageActions.login),
    switchMap(action =>
      this.authService.login(action.credentials).pipe(
        map(user => AuthApiActions.loginSuccess({ user })),
        catchError(error => of(AuthApiActions.loginFailure({ error })))
      )
    )
  )
);
```

## Accessing State

When state is needed, the RxJS `withLatestFrom` operator can be used to provide it.

The example below shows the `addBookToCollectionSuccess$` effect displaying a different alert
depending on the number of books in the collection state.

```typescript
addBookToCollectionSuccess$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(CollectionApiActions.addBookSuccess),
      concatMap(action => of(action).pipe(
        // this produces an array with the action and the latest value from the store
        withLatestFrom(this.store.pipe(select(fromBooks.getCollectionBookIds)))
      )),
      tap(([action, bookCollection]) => {
        if (bookCollection.length === 1) {
          window.alert('Congrats on adding your first book!');
        } else {
          window.alert('You have added book number ' + bookCollection.length);
        }
      })
    ),
  { dispatch: false }
);
```

[Contents](../README.md#angular-foxdonut)
