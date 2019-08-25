# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

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
TypeScript expression to be evaluated. For example,

```html
<button [disabled]="counter >= 10">
```

## Event Bindings

Event bindings use parens `()` around the element property without the `on` prefix. The value is a
TypeScript method to be called on the component. Optionally, you can pass `$event`:

```html
<button (click)="onIncrement($event)">
```

## Two-Way Bindings

To use `ngModel` and two-way binding, you need to add `FormsModule` to the `imports` array in
`app.module.ts`.

```javascript
import { FormsModule } from '@angular/forms';

// ...

  imports: [
    // ...
    FormsModule
  ],

// ...
```

Then you can use two-way binding with `[(ngModel)]`:

```html
<input type="text" [(ngModel)]="twInput">
```

This will set `twInput` when typing into the text field, and will also set the text field value when
changing `twInput` in the component.

The two-way binding syntax `[()]` is shorthand for

```html
<input type="text" [ngModel]="twInput" (ngModelChange)="twInput = $event">
```

Where `[ngModel]` binds the text field's `value` and `(ngModelChange)` to changes either from the
text field's `input` event or changes to `twInput` from the component.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/bindings?file=src%2Fapp%2Fbindings%2Fbindings.component.html)

[Contents](../README.md#angular-foxdonut)
