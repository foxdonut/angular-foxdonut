# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Adding Routes

## Create `AppRoutingModule`

Create the file `src/app/app-routing.module.ts`.

## Configure `AppRoutingModule`

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
```

&rarr; Note that we'll create `HelloComponent` in [Creating Components](creating-components.md).

## Import `AppRoutingModule`

Import `AppRoutingModule` in `AppModule` by adding it in `app.module.ts`:

```javascript
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Add router outlet

In the main template (app.component.html), add `<router-outlet></router-outlet>` to output the
current route.

## Add links

To add a link:

```html
<a [routerLink]="['/hello']">Hello</a>
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/basic?file=src%2Fapp%2Fapp-routing.module.ts)

Later we will look at [Routing](routing.md#angular-foxdonut) in more detail.

[Contents](../README.md#angular-foxdonut)
