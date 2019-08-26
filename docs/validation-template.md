# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Validation - Template-Driven Forms

We will look at validators and how we use the form state to provide validation feedback on the form.

## Making a field required

To make a field required, use the standard HTML 5 `required` attribute:

```html
<input type="text" class="form-control" name="username" ngModel required>
```

## Email validation

The `email` directive validates that a field value is a valid email:

```html
<input type="text" class="form-control" name="email" [ngModel]="'default@me.com'" email>
```

## Minimum and Maximum Length

The `minlength` and `maxlength` validators limit the length of input. For example:

```html
<input #username="ngModel" type="text" class="form-control" name="username"
  ngModel required minlength="3">
```

## Using a Regular Expression with Pattern

Use `pattern` to constrain the input to match a regular expression:

```html
<input #username="ngModel" type="text" class="form-control" name="username"
  ngModel required minlength="3" pattern="\w*">
```

## Marking Inputs as Invalid

We can use the `ng-invalid` and `ng-touched` classes which Angular automatically adds to forms and
form controls. Note that we need to use `input.ng-invalid.ng-touched` if we only want to mark
inputs.

With Bootstrap, we can also use `was-validated` on the `form-group` element and `invalid-feedback`
on the error message. As a toggle for `was-validated`, we add a `#reference` to the input and use
`reference.touched`. For example:

```html
<div class="form-group" [ngClass]="{ 'was-validated': username.touched }">
  <label>Username <span class="text-danger">*</span></label>
  <input #username="ngModel" type="text" class="form-control" name="username" ngModel required>
  <div class="invalid-feedback">Username is required.</div>
</div>
```

Bootstrap automatically displays the error message conditionally. To control that condition
ourselves, we could use:

```html
<div *ngIf="username.touched && username.invalid">Username is required.</div>
```

Bootstrap uses the `:invalid` pseudo-class to style an input. We can also use the `is-invalid`
class for when we are validating the field ourselves:

```html
<input #email="ngModel" type="text" class="form-control" name="email"
  [ngModel]="'default@me.com'" email [ngClass]="{ 'is-invalid': email.invalid }">
```

We can also use `[hidden]` instead of `*ngIf` and `hasError` to conditionally show specific
validation error messages:

```html
<div [hidden]="!username.hasError('required') || !username.touched"
  class="text-danger">Username is required.</div>
<div [hidden]="!username.hasError('minlength') || !username.touched"
  class="text-danger">Username must be at least 3 characters.</div>
```

## Displaying a message after form submission

We can also use `form.submitted` to display a message only after the form was submitted.

## Disabling the Submit button

We can use `[disabled]="f.invalid"` on the submit button, where `f` is `#f="ngForm"` on the `<form>`
tag.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/validation?file=src%2Fapp%2Fvalidation%2Fvalidation-template-form%2Fvalidation-template-form.component.html)

For the complete list of built-in validators, see the
[documentation](https://angular.io/api/forms/Validators).

[Contents](../README.md#angular-foxdonut)
