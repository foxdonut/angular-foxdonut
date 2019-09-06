# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Routing

We looked a bit at routing in [Adding Routes](adding-routes.md#angular-foxdonut). Now, let's look at
routing in more detail.

## Router Links

We've seen that we can create a link using `[routerLink]="['/hello']"`. This is an _absolute_ path.
We can also specify a _relative_ path using `[routerLink]="['./hello']"` or
`[routerLink]="['hello']"` relative to the current path, or "up" the hierarchy using
`[routerLink]="['../../hello']"`.

## Active Links

A special directive can be used to add a class to a link or a parent element when the link is
active: `routerLinkActive="active"`. Note that `active` is the class to add, and could be any class
we wish to use.

**It's important to note** that the root path, `/`, will always match as being active, since it is
always part of the active link path. To prevent this behavior, we can use `routerLinkActiveOptions`:

```html
<li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
  <a routerLink="/">Home</a>
</li>
```

Note that this could also be the case for parent links that have multiple child paths.

[Contents](../README.md#angular-foxdonut)
