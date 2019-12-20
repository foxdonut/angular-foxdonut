# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Modules and Features

Both within Angular and NgRx, we can split our application up into Modules and Features.

## Creating a Feature Module

We can create a Feature Module with the `ng g` command:

```
# Creates a module

ng g m <module-name>

# The route path for a lazy-loaded module. When supplied, creates a component in the new module,
# and adds the route to that component in the Routes array declared in the module provided in the
# --module option.

ng g m <module-name> --module=<module> --route=<route-path>

# When true, creates a routing module.

ng g m <module-name> --routing=true

# When true, creates the files at the project root instead of in a subfolder.

ng g m <module-name> --flat=true
```

See the [documentation](https://angular.io/cli/generate#module) for more details.

Here are some examples:

-----

```
ng g m module1
```

Creates `src/app/module1/module1.module.ts` with this code:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Module1Module { }
```

-----

```
ng g m module2 --routing=true
```

Creates `src/app/module2/module2.module.ts` with this code:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
```

And `src/app/module2/module2-routing.module.ts`, notice the `RouterModule.forChild()` call:

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
```

-----

```
ng g m module3 --module=app --route=mod3
```

Creates these files:

```
src/app/module3/module3.module.ts
src/app/module3/module3-routing.module.ts
src/app/module3/module3.component.ts
src/app/module3/module3.component.css
src/app/module3/module3.component.html
src/app/module3/module3.component.spec.ts
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { Module3Component } from './module3.component';

@NgModule({
  declarations: [Module3Component],
  imports: [
    CommonModule,
    Module3RoutingModule
  ]
})
export class Module3Module { }
```

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module3Component } from './module3.component';

const routes: Routes = [{ path: '', component: Module3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
```

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.css']
})
export class Module3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

Then, in `src/app/app-routing.module.ts`, adds this path configuration:

```typescript
{ path: 'mod3', loadChildren: () => import('./module3/module3.module').then(m => m.Module3Module) }
```

This configuration lazy-loads the module.

-----

## Working with Modules

Now, when working with modules, specify `--module=<name>` to add to a module. Also prefix the
directory so that the files are grouped by module. For example:

```
ng g c module1/something -m module1
```

Use modules to separate features in the app. Also, have shared modules that can be imported by other
modules.

> Components, directives, etc. can only be declared in **one** module.

Now, modules can group functionality, export components that may be used by other modules, and use
services. Services, in fact, should be made available application-wide.

## NgRx Feature State

Feature states behave in the same way root states do, but allow you to define them with specific feature areas in your application. Your state is one large object, and feature states register additional keys and values in that object.

In a feature module, register a feature reduce using `forFeature`:

```typescript
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as MyFeature from './reducers/my.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(MyFeature.featureKey, MyFeature.reducer)
  ],
})
export class MyModule {}
```

Then, add `MyModule` to `AppModule`, which will load the state eagerly.

```typescript
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MyModule } from './my/my.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    MyModule
  ],
})
export class AppModule {}
```

## Communication Between Feature Modules

Let's look at an example where we've divided up an app into feature modules, and we need to
communicate information between them.

We'll create three feature modules:

- Budget
- Car
- WishList

With NgRx Schematics installed (see [NgRx Setup](ngrx-setup.md)), we can use the CLI to generate
stores and features:

```
ng g m budget
ng g store budget/Budget -m budget.module.ts
ng g reducer budget/carClass -r reducers/index.ts -c true --flat false -a false --spec false
ng g reducer budget/carType -r reducers/index.ts -c true --flat false -a false --spec false

ng g m car
ng g store car/Car -m car.module.ts
ng g reducer car/make -r reducers/index.ts -c true --flat false -a false --spec false
ng g reducer car/model -r reducers/index.ts -c true --flat false -a false --spec false

ng g m wishList
ng g store wish-list/WishList -m wish-list.module.ts
```

Then we add the modules to `app.module.ts` by importing `BudgetModule`, `CarModule` and
`WishListModule` and adding them to `imports`.

Let's create some components:

```
ng g c budget/budget -m budget
ng g c car/car -m car
ng g c wish-list/wish-list -m wish-list
```

> For components that we want to use in other modules, we need to add them to `exports`.

We can generate actions files with:

```
ng g action budget/car-class -c true --flat false -a false --spec false
ng g action budget/car-type -c true --flat false -a false --spec false
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/modules-and-features?file=src%2Fapp%2Fcar%2Favailable-makes/available-makes.reducer.ts)

[Contents](../README.md#angular-foxdonut)
