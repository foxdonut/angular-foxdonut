# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Template-Driven Forms

To use template-driven forms:

- add `ngModel` and `name="..."` to form inputs
- for default values, use `[ngModel]="..."`
- add a ref to `ngForm` on the form element, such as `<form #f="ngForm">
- pass the ref to `ngSubmit`, `<form #f="ngForm" (ngSubmit)="onSubmit(f)">`
- `f` is of type `NgForm`, with `value` being an object with the form values.

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f)" class="form">
  <div class="form-group">
    <label>Username</label>
    <input type="text" class="form-control" name="username" [ngModel]="'default'">
  </div>

  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" name="password" ngModel>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-primary btn-sm">Submit Form</button>
  </div>
</form>
```

```javascript
onSubmit(form: NgForm) {
  form.value
}
```

## Using Two-Way Binding

Note that you can still use two-way binding by using `[(ngModel)]="otherProp"` on the input. The
`name` of the input is the property on the form object, while `otherProp` is a property on the
component which will continuously be in sync with the form input value.

## Using `@ViewChild`

An alternative to using `onSubmit(f)` for passing the form to the component is to use `@ViewChild`:

```javascript
export class TemplateFormComponent {
  @ViewChild('f', { static: false }) myForm: NgForm;
}
```

Then we don't need to pass `f` in `onSubmit`, i.e. `(ngSubmit)="onSubmit()"`, and we can access the
form using `this.myForm`.

> The second parameter is new in Angular 8; see
[static-query-migration](https://angular.io/guide/static-query-migration) for details.

## Grouping Inputs

You can group inputs by wrapping them into an element (e.g. a `<div>`) and adding
`ngModelGroup="propertyName"`. Now, those inputs will be under `propertyName` in `form.value`.

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f)" class="form">
  <div ngModelGroup="userData">
    <div class="form-group">
      <label>Username</label>
      <input type="text" class="form-control" name="username" [ngModel]="'default'">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" name="password" ngModel>
    </div>
  </div>

  <!-- more inputs ... -->

  <div class="form-group">
    <button type="submit" class="btn btn-primary btn-sm">Submit Form</button>
  </div>
</form>
```

## Arrays of Form Controls

Use an array and `[ngModelGroup]` to have a dynamic array of form controls. When adding to the
array:

```javascript
onAddInput() {
  this.otherItems.push({});
}
```

To add the controls to the template:

```html
<div>
  Other items:
  <button type="button" class="btn btn-primary btn-sm" (click)="onAddItem()">Add Item</button>
  <div *ngFor="let item of otherItems; let i = index" [ngModelGroup]="i" style="margin-top: 8px">
    <input type="text" name="item" ngModel>
  </div>
</div>
```

## Setting and Patching Values

You can programmatically set and patch form values with `myForm.setValue` and
`myForm.form.patchValue`:

```html
<button type="button" (click)="suggestUsername()">Suggest</button>
```

```javascript
suggestUsername() {
  // This overrides the whole form and you must supply a value for every input
  this.myForm.setValue({
    username: "suggested",
    password: ""
  });

  // This only sets the specified values and leaves the rest unchanged
  this.myForm.form.patchValue({
    username: "suggested"
  });
}
```

## Resetting the Form

To reset the form, call `this.myForm.reset()`. You can also pass in an object as in `patchValue`, to
reinstate default values on inputs.

## Form State

The `NgForm` object has several properties reflecting the form state:

- `dirty`
- `disabled`
- `enabled`
- `errors`
- `invalid`
- `pending`
- `pristine`
- `submitted`
- `touched`
- `untouched`
- `valid`

We will be using some of these when we look at validation.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/forms?file=src%2Fapp%2Fforms%2Ftemplate-form%2Ftemplate-form.component.html)

[Contents](../README.md#angular-foxdonut)
