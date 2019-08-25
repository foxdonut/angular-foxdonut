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

## Grouping Inputs

You can group inputs by wrapping them into another `FormGroup`:

```javascript
this.myForm = new FormGroup({
  userData: new FormGroup({
    email: new FormControl('default@me.com'),
    username: new FormControl(),
    password: new FormControl()
  }),
  howDidYouHear: new FormControl(),
  gender: new FormControl()
});
```

Now, those inputs will be under `userData` in `form.value`.

In the template, you also have to group the inputs by adding a container element (such as a `<div>`)
with `formGroupName="userData"`.

## Arrays of Form Controls

Use `new FormArray([])` to have a dynamic array of form controls. When adding to the array:

```javascript
onAddInput() {
  const control = new FormControl();
  (this.myForm.get('otherItems') as FormArray).push(control);
}
```

To add the controls to the template:

```html
<div formArrayName="inputName">
  <div *ngFor="let ctrl of myForm.get('inputName').controls; let i = index">
    <input type="text" [formControlName]="i">
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
    // ...
  });

  // This only sets the specified values and leaves the rest unchanged
  this.myForm.patchValue({
    userData: {
      username: "suggested"
    }
  });
}
```

## Resetting the Form

To reset the form, call `this.myForm.reset()`. You can also pass in an object as in `patchValue`, to
reinstate default values on inputs.

## Form State

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

[Contents](../README.md)
