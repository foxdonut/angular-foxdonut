# angular-foxdonut

[Contents](../README.md)

# Using Directives

Here we will look at `*ngIf`, `*ngFor`, `[ngStyle]`, and `[ngClass]`.

The `*` is required for _structural_ directive. Structural directives are responsible for HTML
layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating
elements.

The other types of directives are _components_, which are directives with a template (what we've
been using), and _attribute_ directives, which change the appearance or behaviour of an element,
component, or other directive.

## `*ngIf`

The `*ngIf` evaluates the expression and adds the element to the page only if the expression results
in a truthy value:

```html
<div *ngIf="counter >= 5">Counter value is high</div>
```

## `else`

For an `else` condition, aside from using `*ngIf` again with the opposite value, you can use `else`
along with `<ng-template>`:

```html
<div *ngIf="counter > 5; else lowCounter">Counter value is high</div>
<ng-template #lowCounter><div>Counter value is low</div></ng-template>
```

## `*ngFor`

The `*ngFor` directive uses `let <var> of <array>` syntax:

```html
<div *ngFor="let item of items">{{ item.name }}</div>
```

You can alias an exported value to a local variable, such as `index`:

```html
<div *ngFor="let item of items; index as idx">
```

Several exported values within `*ngFor` can be aliased to local variables:

- `index`
- `first`
- `last`
- `even`
- `odd`

You can use the same name for the variable, such as `first as first`, but you do need to alias in
order to use them. That is, you cannot use `first` without having the `first as ...`.

Finally, as an alternative to `first as first`, you can also write `let first = first`.

## `[ngStyle]`

The `[ngStyle]` directive takes an object with style properties as keys and expressions as values.
The expressions may call methods on the component.

```html
<span [ngStyle]="{color: counter <= 0 ? 'red' : 'green'}">{{ counter }}</span>
```

## `[ngClass]`

The `[ngclass]` directive takes an object with class names as keys and boolean expressions as
values. The expressions may call methods on the component. If and only if the boolean expression
results to a truthy value, the class is added to the element's class list.

```html
<span [ngClass]="{low: counter <= 0, high: counter > 0}">{{ counter }}</span>
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/using-directives?file=src%2Fapp%2Fusing-directives%2Fusing-directives.component.html)

[Contents](../README.md)
