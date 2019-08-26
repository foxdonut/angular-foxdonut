# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Validation - Reactive Forms

We will look at validators and how we use the form state to provide validation feedback on the form.

## Making a field required

To make a field required, use `Validators.required` when creating the `FormControl`:

```javascript
username: new FormControl(null, Validators.required)
```

## Email validation

`Validators.email` validates that a field value is a valid email:

```javascript
email: new FormControl('default@me.com', Validators.email)
```

## Minimum and Maximum Length

The `minLength` and `maxLength` validators limit the length of input. For example:

```javascript
username: new FormControl(null, [Validators.required, Validators.minLength(3)])
```

## Using a Regular Expression with Pattern

Use `pattern` to constrain the input to match a regular expression:

```javascript
username: new FormControl(null, [
  Validators.required, Validators.minLength(3), Validators.pattern(/\w*/)
])
```

## Minimum and Maximum Numerical Value

Use `min` and `max` to validate a numerical value's minimum and maximum:

```javascript
frequency: new FormControl(null, [Validators.min(0), Validators.max(7)])
```

## Marking Inputs as Invalid

We can use the `ng-invalid` and `ng-touched` classes which Angular automatically adds to forms and
form controls. Note that we need to use `input.ng-invalid.ng-touched` if we only want to mark
inputs.

With Bootstrap, we can also use `was-validated` on the `form-group` element and `invalid-feedback`
on the error message. As a toggle for `was-validated`, we can call
`myForm.controls.userData.controls.username` to get the input and use `.touched`. For example:

```javascript
isFieldState(field: string, state: string) {
  const control = (this.myForm.controls.userData as FormGroup).controls[field];
  return control.touched && control[state];
}
```

Using this for `was-validated` and `is-invalid`, we have:

```html
<div class="form-group" [ngClass]="{ 'was-validated': isFieldState('username', 'valid') }">
  <label>Username <span class="text-danger">*</span></label>
  <input type="text" class="form-control" formControlName="username"
    [ngClass]="{ 'is-invalid': isFieldState('username', 'invalid') }">
  <div class="invalid-feedback">Username is required.</div>
</div>
```

## Displaying a message after form submission

We can also use `form.submitted` to display a message only after the form was submitted.

## Disabling the Submit button

We can use `[disabled]="myForm.invalid"` on the submit button.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/validation?file=src%2Fapp%2Fvalidation%2Fvalidation-reactive-form%2Fvalidation-reactive-form.component.ts)

For the complete list of built-in validators, see the
[documentation](https://angular.io/api/forms/Validators).

[Contents](../README.md#angular-foxdonut)
