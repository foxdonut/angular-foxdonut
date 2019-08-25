# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Getting Started

## Install Angular CLI

```
npm i -g @angular/cli
```

## Create a new project

```
ng new project-name
```

Decide whether or not to add routing* (*see below for differences)

This creates the project and installs the dependencies.

## Run the project

```
cd project-name
ng serve
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/basic?file=src%2Fapp%2Fapp.component.ts)

## Add Routing at project creation time

When you add routing at project creation time, the differences are:

- `src/app/app-routing.module.ts` with `AppRoutingModule` is created
- `src/app/app.module.ts` imports `AppRoutingModule`
- `src/app/app.component.html` includes a `<router-outlet>` tag
- `src/app/app.component.spec.ts` imports `RouterTestingModule`

[Contents](../README.md#angular-foxdonut)
