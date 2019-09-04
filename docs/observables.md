# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Observables

Observables come from RxJS and can either be used by artifacts provided by Angular, or created by
us.

## Subscribing and Unsubscribing

We can subscribe to observables with `subscribe`:

```typescript
someObservable.subscribe(data => { ... });
```

It's important to **unsubscribe** from observables that **we** create, to avoid memory leaks. To
unsubscribe, call `unsubscribe` on the object returned by `subscribe`:

```typescript
ngOnInit() {
  this.myObservable = interval(1000).subscribe(count => { console.log(count); });
}
ngOnDestroy() {
  this.myObservable.unsubscribe();
}
```

> Note that for observables **provided by Angular**, we do not need to unsubscribe. Angular manages
observables that it creates.

## Creating an Observable

We can create an observable with `Observable.create()`:

```typescript
ngOnInit() {
  const myObservable = Observable.create(observer => {
    let count = 0;
    setInterval(() => {
      observer.next(count++);
    }, 1000);
  });
}
```

## Dealing with errors

To signal an error in an observable, use `error`:

```typescript
observer.error(new Error('Something went wrong'));
```

To handle an error when subscribing to an observable, pass the handler function as the second
argument to `subscribe`:

```typescript
myObservable.subscribe(data => { ... }, error => { ... });
```

## Observable completion

To indicate the completion of an observable, use `complete()`:

```typescript
observer.complete();
```

To do something when an observable completes, pass the handler function as the third argument to
`subscribe`:

```typescript
myObservable.subscribe(data => { ... }, () => {}, () => { console.log('completed'); });
```

> Note that if an observable signals an error, the handler function for completion does **not** get
called.

## Using Operators

To use RxJS operators, first call `pipe` on the observable, then pass in the operator such as `map`:

```typescript
return myObservable.pipe(
  map(data => changedData),
  filter(...)
);
```

> Note that `pipe()` returns a new observable, so you should make sure to return it, or call
> `subscribe()` after `pipe()`.

[Here is a list of RxJS operators](https://www.learnrxjs.io/operators/).

## Using Subject

Instead of `EventEmitter`, we can (and should) use `Subject` to emit events to communication between
components via services.

```typescript
mySubject = new Subject<number>();
```

You can then use `next()` to emit data, as well as `subscribe()`, `pipe()`, operators, and
`unsubscribe()`.

> We should still use `EventEmitter` for `@Output` properties.

## Using an Observable in an Async Validator

Going back to the custom asynchronous validator that we created in
[Custom Validators](custom-validators.md#creating-an-async-validator), we can return an `Observable`
instead of a `Promise`. The observable **must complete** for this to work. If we are using an
infinite observable, we can `pipe()` and use an operator such as `first()`, `last()`, `take()`, and
so on. If we are creating our own observable, we need to call `complete()`:

```typescript
emailAvailable(control: FormControl): Observable<ValidationErrors | null> {
  return Observable.create((observer: Observer<ValidationErrors | null>) => {
    setTimeout(() => {
      if (this.takenEmails.indexOf(control.value) >= 0) {
        observer.next({ emailTaken: true });
        observer.complete();
      } else {
        observer.next(null);
        observer.complete();
      }
    }, 2000);
  });
}
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/observables?file=src%2Fapp%2Fobservables%2Fobservables.component.ts)

[Contents](../README.md#angular-foxdonut)
