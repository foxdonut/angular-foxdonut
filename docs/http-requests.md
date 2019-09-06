# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# HTTP Requests

## Setup

To make HTTP requests, we need to import `HttpClientModule`:

```typescript
// in app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [..., HttpClientModule]
})
```

Then, inject `HttpClient` in the component:

```typescript
import { HttpClient } from '@angular/common/http';

@Component({ ... })
export class MyComponent {
  constructor(private http: HttpClient) {}
}
```

## Making HTTP Requests

`HttpClient` contains methods such as `get` and `post` which take the URL, options (such as headers
and request params), and body for a POST request. The methods return an `Observable` to which we
subscribe to receive the response:

```typescript
this.http.post(url, body).subscribe((response: MyType) => { ... });
```

Because we are getting back an `Observable`, we can `pipe()` operators before `subscribe()` to
transform the response data.

## Handling Errors

Remember from [Observables](observables.md#dealing-with-errors) that to handle errors, we need to
pass the error handling function as the second argument to `subscribe()`.

We can alternatively use the `catchError(error => { ... })` operator in `pipe()` to handle errors.
We need to make sure to `return throwError(error)` to pass the error down the chain.

## Parameters and Headers

When making requests, we can include an options object with keys like `params` and `headers` to
specify request parameters and request headers, respectively. These can be plain objects, or we can
use `new HttpHeaders({ ... })` and `new HttpParams().set(key, value)` or `.append(...)`.

## Example

Below is an example of making an HTTP request to the online backend for the
[realworld](https://demo.realworld.io) application, showing a list of articles.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/http-requests?file=src%2Fapp%2Fhttp-requests%2Fhttp-requests.component.ts)

## Obtaining the full response

By default, the response we get from a request is just the body. If instead we need access to the
full response object, we can specify `{ observe: 'response' }` in the options:

```typescript
http.get(url, { observe: 'response' }).subscribe(response => {
  // response now has body, headers, ok, status, statusText, type, url
});
```

## Changing the response type

In the options, we can specify `{ responseType: 'text' }` to change how data is parsed by Angular.
Other `responseType` values include `arraybuffer`, `blob`, and `json` (the default).

## Observing events

You can also specify `{ observe: 'events' }` to be notified of AJAX events as the request is being
carried out:

```typescript
http.get(url, { observe: 'events' }).subscribe(event => {
  if (event.type === HttpEventType.Sent) {
    // ...
  } else if (event.type === HttpEventType.Response) {
    // ...
  }
  // Other event types include DownloadProgress, ResponseHeader, UploadProgress, User
});
```

## Interceptors

Interceptors are useful for configuring **all** requests, such as adding a header.

To create an interceptor, implement the `HttpInterceptor` interface:

```typescript
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // ...
    return next.handle(req);
  }
}
```

Then, register the interceptor in `AppModule`:

```typescript
@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }]
})
```

> You can specify multiple interceptors, each with their `{ provide, useClass, multi }` object. The
> interceptors will run in the same order as they are listed in the array.

The interceptor is ready to go. You can modify the request by calling `req.clone({ ... })` and
passing the result to `next.handle()`. You can also modify the response by using `pipe()` on
`next.handle()`, since that returns an observable.

For example:

```typescript
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req.clone({
      headers: req.headers.append('My-Custom-Header', 'someValue')
    })).pipe(tap(console.log));
  }
}
```

This adds `My-Custom-Header` to the headers and logs the response object.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/http-requests?file=src%2Fapp%2Fhttp-requests%2Flogging-interceptor.service.ts)

&rarr; For a full reference to HTTP in Angular, see the [documentation](https://angular.io/guide/http).

[Contents](../README.md#angular-foxdonut)
