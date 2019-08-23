# angular-foxdonut

[Contents](../README.md)

# Template-Driven Forms

To use template-driven forms:

- add `ngModel` and `name="..."` to form inputs
- add a ref to `ngForm` on the form element, such as `<form #f="ngForm">
- pass the ref to `ngSubmit`, `<form #f="ngForm" (ngSubmit)="onSubmit(f)">`
- `f` is of type `NgForm`, with `value` being an object with the form values.

```html
<form #f="ngForm" (ngSubmit)="onSubmit1(f)" class="form">
  <div class="form-group">
    <label for="email">Username</label>
    <input type="text" class="form-control" name="username" ngModel>
  </div>

  <div class="form-group">
    <label for="email">Password</label>
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

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/forms?file=src%2Fapp%2Ftemplate-form%2Ftemplate-form.component.html)

[Contents](../README.md)
