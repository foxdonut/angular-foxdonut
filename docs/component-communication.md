# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Component Communication

As we saw in [Services](services.md#using-a-service-for-inter-component-communication), we can use
services to communicate between components. Let's look at other ways.

## Using local references with `#ref`

To pass data from a template element to a component, we can use a local reference. For example:

```html
<input type="text" #myInput>
<button (click)="onAddItem(myInput)">Add Item</button>
```

This passes the input element to `onAddItem`:

```typescript
onAddItem(myInput: HTMLInputElement) {
  this.items.push(myInput.value);
  myInput.value = '';
}
```

## Using `@Input`

We used `@Input` in [Custom Directives](custom-directives.md#passing-data-to-the-directive) to pass
data into a directive. We can also use `@Input` with components. This allows to pass data into the
component:

```typescript
// Renaming the input to `my-user`.
// This is optional; the default is the name of the property, i.e. `user`.
@Input('my-user') user: User;
```

Then we can pass data into the component:

```html
<app-user *ngFor="let user of users" [my-user]="user"></app-user>
```

## Using `@Output`

`@Output` allows us to pass data from inside a component out to the caller of the component. An
`EventEmitter` is used to trigger values. The caller uses event binding, `(propertyName)` to listen
to values and call a handler function.

Add an `@Output` property:

```typescript
// Renaming the output to `edit-user`.
// This is optional; the default is the name of the property, i.e. `editUser`.
@Output('edit-user') editUser = new EventEmitter<User>();
```

Signal values by emitting them:

```typescript
saveUser(id: number, usernameInput: HTMLInputElement) {
  const username = usernameInput.value;
  this.editUser.emit({ id, username });
}
```

Then you can listen to the output in the parent:

```html
<app-user *ngFor="let user of users" [my-user]="user" (edit-user)="onEditUser($event)"></app-user>
```

Note that `$event` is the data that we pass when we call `emit()`.

## Using `<ng-content>`

Finally, you can pass template content to a component and display it. In the component's template,
use `<ng-content></ng-content>` where you want to display the content. To pass content to the
component, simply include the content in the body of the component's tag:

```html
<app-user *ngFor="let user of users" [my-user]="user" (edit-user)="onEditUser($event)">
  <span>This is template content, there are {{ users.length }} users.</span>
</app-user>
```

```html
<div>
  id: {{ user.id }}
  username: <input type="text" [value]="user.username" #username>
  <button class="btn btn-primary btn-sm" (click)="saveUser(user.id, username)">Save</button>
  <ng-content></ng-content>
</div>
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/component-communication?file=src%2Fapp%2Fcomponent-communication%2Fuser%2Fuser.component.ts)

[Contents](../README.md#angular-foxdonut)
