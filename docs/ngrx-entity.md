# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# NgRx Entity

To manage entities, `@ngrx/entity` provides an API that reduces boilerplate and gives us support for
common CRUD operations.

## Creating an Entity

An NgRx entity extends `EntityState` with the type of our data:

```typescript
import { EntityState } from '@ngrx/entity';
import { Car } from './model';

export interface CarState extends EntityState<Car> {

}
```

The entity has two main properties:
- `entities`: an id-value lookup of the entities
- `ids`: an ordered array of ids

## Entity Adapter

The `createEntityAdapter` function provides many helpers to manage entities:

```typescript
import { createEntityAdapter } from '@ngrx/entity';

const adapter = createEntityAdapter<Car>();

adapter.addOne
       .addMany
       .getInitialState
       .removeAll
       .removeMany
       .removeOne
       .updateMany
       .updateOne
       .upsertMany
       .upsertOne
```

## Using the Adapter to populate the Store

We can use the adapter to populate the store in a reducer:

```typescript
export const carReducer = createReducer(
  adapter.getInitialState(),
  on(allCarsLoaded, (state, action) => adapter.addAll(action.cars, state))
);
```

## Entity Selector

To display entities in a component, we can use selectors that the adapter provides:

```typescript
export const selectors = adapter.getSelectors();

import { selectors } from '...';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectCarsState = createFeatureSelector<Car>('cars');

const selectAllCars = createSelector(
  selectCarsState,
  selectors.selectAll
);

const selectStandardCars = createSelector(
  selectCarsState,
  cars => cars.filter(car => car.type === 'STANDARD')
);

cars$: Observable<Car>;

this.cars$ = this.store.pipe(select(selectAllCars));
```

This gives us a list of `Car`s ordered by ids.

## Entity Sorting

Sorting by `id` is not always what we want. We can specify sorting by providing a `sortComparer` to
`createEntityAdapter`:

```typescript
const compareCars = (c1: Car, c2: car) => {
  if (...) {
    return 1;
  }
  if (...) {
    return -1;
  }
  return 0;
}

const adapter = createEntityAdapter<Car>({
  sortComparer: compareCars,

  // Use this only if you don't have an `id` property -- not recommended
  selectId: car => car.carId
});
```

## Loading Data for a Component

To load data when arriving at a component, we can dispatch an action which triggers an Effect:

```typescript
// in Component's ngOnInit():
this.store.dispatch(loadData());

// In a separate class
@Injectable()
export class CarEffects {

  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadData),
      concatMap(action => httpService.loadData(action.param)),
      map(data => dataLoaded({ data })) // dataLoaded is an Action
    )
  );

  constructor(private actions$: Actions) { }
}
```

To load the data only once, we can add a flag to the state:

```typescript
export interface CarState extends EntityState<Car> {
  carsAreLoaded: boolean;
}

adapter.getInitialState({ carsAreLoaded: false })

export const selectCarsAreLoaded = createSelector(
  selectCarsState,
  state => state.carsAreLoaded
);

// In the reducer
on(allCarsLoaded, (state, action) =>
  adapter.addAll(action.cars, { ...state, carsAreLoaded: true }))
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/modules-and-features?file=src%2Fapp%2Fcar%2Favailable-makes/available-makes.reducer.ts)

[Contents](../README.md#angular-foxdonut)
