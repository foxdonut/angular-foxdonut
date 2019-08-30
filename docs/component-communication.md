# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Component Communication

As we saw in [Services](services.md#using-a-service-for-inter-component-communication), we can use
services to communicate between components. Let's look at other ways.

## Using local references with `#ref`

## Using `@Input`

We used `@Input` in [Custom Directives](custom-directives.md#passing-data-to-the-directive) to pass
data into a directive. We can also use `@Input` with components. This allows to pass data into the
component.

## Using `@Output`

`@Output` allows us to pass data from inside a component out to the caller of the component. An
`EventEmitter` is used to trigger values. The caller uses event binding, `(propertyName)` to listen
to values and call a handler function.

## Using `<ng-content>`

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/component-communication?file=src%2Fapp%2F.component.ts)

[Contents](../README.md#angular-foxdonut)
