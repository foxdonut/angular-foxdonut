# angular-foxdonut

[Contents](../README.md)

# Reactive Forms

To use reactive forms:

- In `app.module.ts`, add `ReactiveFormsModule` to the `imports`
- In the component, create a property of type `FormGroup`
- In `ngOnInit`, initialize the property to `new FormGroup({...})`. Each key is the name of the
  input, and the value is a `new FormControl(defaultValue)`
- In the template, add `[formGroup]="formGroupProperty"` to the `<form>` tag
- Add `formControlName="inputName"` to each input

```javascript
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  submittedForm = '';

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    this.submittedForm = JSON.stringify(this.myForm.value, null, 2);
  }
}
```

The `FormGroup` object has several properties reflecting the form state:

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

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/forms?file=src%2Fapp%2Fforms%2Freactive-form%2Freactive-form.component.ts)

Here is the corresponding template:

```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()" class="form">
  <div class="form-group">
    <label>Username</label>
    <input type="text" class="form-control" formControlName="username">
  </div>

  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" formControlName="password">
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-primary btn-sm">Submit Form</button>
  </div>

  <div>Submitted form:</div>
  <pre>{{ submittedForm }}</pre>
</form>
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/forms?file=src%2Fapp%2Fforms%2Freactive-form%2Freactive-form.component.html)

[Contents](../README.md)
