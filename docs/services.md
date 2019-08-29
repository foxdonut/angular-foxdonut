# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Services

Services are where we can write reusable code for components to use. Angular uses dependency
injection to make services available to components.

## Creating a Service

To create a service manually:

- Create a class for the service
- Add `constructor(private myService: MyService)` in the component where you want to use the service
- Add `MyService` to the array of `providers` in `@Component` (or AppComponent, or AppModule; see
  below)
- Since Angular constructs components, it recognizes the constructor parameters and injects
  dependencies

## Where to provide services

Services can be provided at different levels of the application:

- `AppModule`: same instance of the service is available throughout the application
- `AppComponent`: same instance for all components, but not for other services
- Specific component: same instance for the component's children

We should provide a service at the level that is appropriate for having the same instance or
different instances in the component hierarchy.

## Generating a Service

You can also generate a service:

```
ng g s services/username --skipTests=true
```

This generates `src/app/services/username.service.ts` with:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }
}
```

`@Injectable({ providedIn: 'root' })` is the equivalent of having `UsernameService` in the
`providers` array of `AppModule`.

> For this to work on StackBlitz, the service is provided in `AppModule` and injected into
> components with `@Inject`:
> ```typescript
> constructor(@Inject(UsernameService) private usernameService: UsernameService) { }
> ```

## Injecting a service into another service

A service that requires another service should be marked with `@Injectable()`, and use `constructor`
to receive the service. The service being injected should be in the `AppModule`'s providers array,
or be marked with `@Injectable({ providedIn: 'root' })` so that it is available for injection into
other services.

## Using a service for inter-component communication

A service can have an `EventEmitter` property which components can use to emit events and other
components can listen to and react to events. Because we need the same service instance for
different components, the service must be provided at the `AppModule` level.

Components can call `this.myService.someEventEmitter.emit(data)` to emit an event.

Other components can use `this.myService.someEventEmitter.subscribe(data => ...)` to listen to
events.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/services?file=src%2Fapp%2Fservices%2Fusername.service.ts)

[Contents](../README.md#angular-foxdonut)

