# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Routing

We looked a bit at routing in [Adding Routes](adding-routes.md#angular-foxdonut). Now, let's look at
routing in more detail.

## Router Links

We've seen that we can create a link using `[routerLink]="['/hello']"`. This is an _absolute_ path.
We can also specify a _relative_ path using `[routerLink]="['./hello']"` or
`[routerLink]="['hello']"` relative to the current path, or "up" the hierarchy using
`[routerLink]="['../../hello']"`.

## Active Links

A special directive can be used to add a class to a link or a parent element when the link is
active: `routerLinkActive="active"`. Note that `active` is the class to add, and could be any class
we wish to use.

**It's important to note** that the root path, `/`, will always match as being active, since it is
always part of the active link path. To prevent this behavior, we can use `routerLinkActiveOptions`:

```html
<li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
  <a routerLink="/">Home</a>
</li>
```

Note that this could also be the case for parent links that have multiple child paths.

## Setting Route Parameters

Angular uses the common practice of specifying route parameters with `:`, such as `user/:id`.

We can use `[routerLink]="['/user', 42]"` to create a link that navigates to `/user/42`.

To specify query parameters on a link, use the `queryParams` property of `routerLink`. You can also
use `fragment` to specify a hash `#`:

```html
<!-- this navigates to ...?key=value#test -->
<a [routerLink]="[...]" [queryParams]="{ key: 'value' }" fragment="test">Link</a>
```

We can also specify some static data in the route definition:

```typescript
{ path: '...', component: ..., data: { key: 'value' } }
```

## Programmatic Navigation

To navigate programmatically, we need to inject the router, of type `Router`, and call `navigate()`:

```typescript
constructor(private router: Router) {}

onNavigate() {
  this.router.navigate(['/home']);
}
```

We can also use relative and multiple paths when calling `navigate()`. Unlike links however, the
router does not automatically know "where" it is currently located. To navigate to a relative path,
we need to specify an options object as the second argument:

```typescript
this.router.navigate(['relative'], { relativeTo: this.route });
```

The options object is also where we can specify `queryParams` and `fragment`:

```typescript
this.router.navigate(['users', 42], { queryParams: { key: 'value' }, fragment: 'test' });
```

We can also use `queryParamsHandling: 'preserve' | 'merge'` when we want to keep or append to query
parameters when navigating.

## Reading Route Parameters

We can retrieve the values from the activated route's snapshot:

```typescript
constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.snapshot.params['id']
  this.route.snapshot.queryParams['key']
  this.route.snapshot.data['key']
  this.route.snapshot.fragment
}
```

However, this only retrieves the parameters **once**. If we navigate to the same route but with a
different `id` parameter, our component will not be notified of the change. To listen to route
parameter changes, we need to subscribe to the `params` stream:

```typescript
ngOnInit() {
  this.route.params.subscribe((params: Params) => {
    params['id']
  });
  this.route.queryParams.subscribe((params: Params) => {
    params['key']
  });
  this.route.data.subscribe((data: Data) => {
    data['key']
  });
  this.route.fragment.subscribe((fragment: string) => {
    fragment
  });
}
```

## Child Routes

Instead of having route paths such as:

- `'users'`
- `'users/:id'`
- `'users/:id/edit'`

We can use `children`:

```typescript
const appRoutes: Routes = [
  { path: 'users', component: UsersComponent, children: [
    { path: ':id', component: UserComponent },
    { path: ':id/edit', component: UserEditComponent }
  ]}
];
```

Now it's important to have a `<router-outlet></router-outlet>` tag in the template for
`UsersComponent`.

## Catchall Route

To handle invalid paths, add a catchall route **at the end of the array**, using `'**'`:

```typescript
{ path: '**', component: PageNotFoundComponent }
```

An alternative to having `PageNotFoundComponent` is to redirect:

```typescript
{ path: '**', redirectTo: '/' } // redirect to home page
```

You can also specify `pathMatch: 'full'` to ensure that a route matches exactly, and not just by
prefix.

## Guarding Routes

To guard routes, create a class that implements `CanActivate`:

```typescript
export class MyGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return verify().then((result: boolean) => {
      if (result) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
```

This is a service, so add it to `providers` in `AppModule`:

```typescript
@NgModule({
  providers: [MyGuard]
})
export class AppModule { }
```

Or, you can annotate the service class with `@Injectable({ providedIn: 'root' })`.

To use the guard, add it to a route config:

```typescript
{ path: 'guarded', canActivate: [MyGuard], ... }
```

This automatically guards any child routes as well.

To guard **only** the child routes, use `CanActivateChild`:

```typescript
export class MyGuard implements CanActivate, CanActivateChild {
  canActivate(...) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return ...
  }
}
```

```typescript
{ path: 'guarded', canActivateChild: [MyGuard], children: [...] }
```

Similarly, to guard when **leaving** a route, we can use `CanDeactivate`.

## Loading data on route arrival

We can load data upon route arrival using `resolve`. Note that this code runs **before** the
component is loaded. Alternatively, we _could_ let the component load, and use `ngOnInit` to display
a "please wait" message or spinner, and load the data there.

To create a resolver, implement `Resolve`:

```typescript
// Typically we will need to inject another service
@Injectable()
export class MyResolver implements Resolve<MyData> {
  constructor(private myService: MyService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<MyData> | Promise<MyData> | MyData
  {
    return this.myService.loadData(route.params['id']);
  }
}
```

This is a service, so add it to `providers` in `AppModule`. Or, you can annotate the service class
with `@Injectable({ providedIn: 'root' })`.

To use the resolver, add `resolve` to the route config with the property on which to set the data on
the `Data` that the component will receive:

```typescript
{ path: '...', component: MyComponent, resolve: { myProperty: MyResolver } }
```

We can then retrieve the data in the component with:

```typescript
ngOnInit() {
  this.route.snapshot.data['myProperty']
  // or
  this.route.data.subscribe((data: Data) => {
    data['myProperty']
  });
}
```

## Displaying a message while loading

When using a resolver, we need to subscribe to router events to display a message while the resolver
is loading data. This should be in the component from which the navigation occurs.

```typescript
constructor(private router: Router) { }

ngOnInit() {
  this.router.events.subscribe((routerEvent: Event) => {
    if (routerEvent instanceof NavigationStart) {
      this.loading = 'Loading, please wait...';
    } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel) {
      this.loading = null;
    }
  });
}
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/routing?file=src%2Fapp%2Fapp-routing.module.ts)

[Contents](../README.md#angular-foxdonut)
