# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# `@Component` Options

There are several options in `@Component`. We will look at the three basic ones here.

## Selector

Normally, `selector` is a tag name, such as `app-hello`. But it's good to know that this is a
CSS-style selector. For example, you can use a class, `.app-hello`, or an attribute, `[app-hello]`.
Then you can add the component to the template using, for example, `<div class="app-hello"></div>`.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/component-options?file=src%2Fapp%2Fcomponent%2Fcomponent-options%2Fcomponent-options-selector%2Fcomponent-options-selector.component.ts)

## Template

By default, `templateUrl` points to the template file. This can be replaced with `template`, in
which case you write the template inline as a string. For example, `template: "<p>hello</p>"`. You
can also use backticks, ``, to use a multiline string.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/component-options?file=src%2Fapp%2Fcomponent%2Fcomponent-options%2Fcomponent-options-template%2Fcomponent-options-template.component.ts)

## Style

Similarly to `template`, you can use `styles` instead of `styleUrls` to specify an array of inline
styles as strings.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/component-options?file=src%2Fapp%2Fcomponent%2Fcomponent-options%2Fcomponent-options-style%2Fcomponent-options-style.component.ts)

There are more options, which we will see as needed in other sections. See all the options in the
[documentation](https://angular.io/api/core/Component).

[Contents](../README.md#angular-foxdonut)
