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

## Examples

To run the examples in these articles:

```
git clone https://github.com/foxdonut/angular-foxdonut
npm ci
ng serve
```

You can also use `git branch -a` to see the different branches, and `git checkout <branchname>` to
switch to a specific branch.

Each article also includes a link that opens the project in StackBlitz:

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/basic?file=src%2Fapp%2Fapp.component.ts)

This allows you to experiment with the code directly in your browser.

> Note that, due to Angular versions, there could be some differences in the results between running
> the project locally and on StackBlitz. The local project should be considered as authoritative.

## Add Routing at project creation time

When you add routing at project creation time, the differences are:

- `src/app/app-routing.module.ts` with `AppRoutingModule` is created
- `src/app/app.module.ts` imports `AppRoutingModule`
- `src/app/app.component.html` includes a `<router-outlet>` tag
- `src/app/app.component.spec.ts` imports `RouterTestingModule`

[Contents](../README.md#angular-foxdonut)
