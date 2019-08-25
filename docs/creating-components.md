# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Creating Components

## Generate the Component

```
ng g c Hello
```

This will generate the component under `app/hello`. You can also specify a folder to further group
components:

```
ng g c component/Hello
```

This creates:

```
src/app/component/hello/hello.component.css
src/app/component/hello/hello.component.html
src/app/component/hello/hello.component.spec.ts
src/app/component/hello/hello.component.ts
```

And updates:

```
src/app/app.module.ts
```

to import `HelloComponent` and add it to the array of `declarations`.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/basic?file=src%2Fapp%2Fcomponent%2Fhello%2Fhello.component.ts)

## Options

| option | purpose | alias |
|----|----|----|
|`--skipTests=true` | Omit the `spec.ts` file | |
|`--inlineStyle=true` | Omit the `component.css` file | -s |
|`--inlineTemplate=true` | Omit the `component.html` file | -t |

For example,

```
ng g c -s -t --skipTests=true duck
```

only generates `src/app/duck/duck.component.ts`.

See all the options in the [documentation](https://angular.io/cli/generate#component-command).

[Contents](../README.md#angular-foxdonut)
