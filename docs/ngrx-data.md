# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# NgRx Data

NgRx Data builds on NgRx Entity and adds more support to reduce boilerplate in common scenarios.

## Setup

Add NgRx Data to the project:

```
ng add @ngrx/data
```

This should also add `EntityDataModule` to the `imports` of `app.module.ts`:

```typescript
imports: [
  EntityDataModule.forRoot(entityConfig)
]
```

The `entityConfig` comes from the created `app/entity-metadata.ts` file. This is where you define an
entity metadata map:

```typescript
const entityMetadata: EntityMetadataMap = {
  Car: {
    entityDispatcherOptions: ...,
    sortComparer: ...,
    selectId: ...,
    ...
  }
};
```

THIS PART MAY NOT BE NECESSARY &darr;

Then in the module constructor, inject the entity definition service and register the entity
metadata map:

```typescript
constructor(private eds: EntityDefinitionService) {
  eds.registerMetadataMap(entityMetadata);
}
```

THIS PART MAY NOT BE NECESSARY &uarr;

Finally, create an entity service, e.g. `car-entity.service.ts`:

```typescript
@Injectable()
export class CarEntityService extends EntityCollectionServiceBase<Car> {
  constructor(private serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Car', serviceElementsFactory);
  }
}
```

And add `CarEntityService` to the `providers` array of the module.

## Using the Entity Service

We inject the entity service where we want to use it:

```typescript
constructor(private carEntityService: CarEntityService) {}

ngOnInit() {
  // This fetches the data from the backend and puts it in the store
  this.carEntityService.getAll();
}
```

This will use conventions to determine the URL for fetching data from the backend and interpreting
the response. However, we can customize these to match our server.

## Customizing the Data Service

To customize the URL for fetching data and the interpretation of the server response, we create a
Data Service, e.g. `car-data.service.ts`:

```typescript
@Injectable()
export class CarDataService extends DefaultDataService<Car> {
  constructor(http: HttpClient, urlGenerator: HttpUrlGenerator) {
    super('Car', http, urlGenerator);
  }

  // Override the getAll method to change the URL and manage the response
  getAll(): Observable<Car[]> {
    return this.http.get('/path/to/cars').pipe(map(response => response.records));
  }
}
```

And add `CarDataService` to the `providers` array of the module.

In the module's constructor, inject the entity data service and register the custom data service:

```typescript
constructor(
  private entityDataService: EntityDataService,
  private carDataService: CarDataService) {

  entitytDataService.registerService('Car', carDataService);
}
```

## Preventing Multiple Data Loads

To load data only once, and not every time a component is loaded or a route is accessed, we can use
the `loaded$` indicator present on the entity service:

```typescript
ngOnInit() {
  this.carEntityService.loaded$
    .pipe(
      tap(loaded => {
        if (!loaded) {
          this.carEntityService.getAll();
        }
      })
    );
}
```

In a route resolver, we would also add `filter(loaded), first()` to complete the route transition
only when the data has been loaded.

## Reading Data from the Store

The entity service provides an `entities$` observable that we can use to read data from the store:

```typescript
ngOnInit() {
  this.cars$ = this.carEntityService.entities$;
}
```

We can, of course, filter these entities if we want to display a subset.

## Creating, Updating, and Deleting

We can call methods on the entity service to create, update, and delete data:

```typescript
this.carEntityService.add(car);
this.carEntityService.update(car);
this.carEntityService.delete(car);
```

We can `subscribe` to any of these methods if we need to do something after the HTTP request
completes, such as close a dialog.

[Contents](../README.md#angular-foxdonut)
