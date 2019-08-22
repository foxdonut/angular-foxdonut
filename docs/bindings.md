# angular-foxdonut

[Contents](../README.md)

# Bindings

Bindings are ways for data to flow from components to templates, templates to components, or both.
They are also how we can react to DOM events.

## String Interpolation

To output a value that comes from a component, use the `{{ }}` syntax. This will read a property
from the component. Within the string interpolation is a TypeScript expression, so you can use
things like `{{ value.length }}`. Pipes can also be used, such as `{{ value | uppercase }}` (more
about pipes later.)

## Property Bindings

Property bindings are square brackets `[]` around an element property, with the value being the
TypeScript expression to be evaluated.

## Event Bindings

## Two-Way Bindings

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/bindings?file=src%2Fapp%2Fbindings%2Fbindings.component.ts)

[Contents](../README.md)
