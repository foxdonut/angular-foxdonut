# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Custom Validators

A validator is a function that takes a `FormControl` and returns an object with the keys being field
names and `true` boolean values to signal validation errors, or `null` (**not** field names with
`false`) when validation passes.

```typescript
function myCustomValidator(control: FormControl): {[s: string]: boolean} { }
```

Then you can pass `myCustomValidator` when creating a `FormControl`.

> If you are using `this` inside the function, you'll need to use `myCustomValidator.bind(this)`
> when passing the validator to the form control.

More generally, the function implements this interface:

```typescript
interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}
```

Where `AbstractControl` is `FormControl`, `FormGroup`, or `FormArray`, and `ValidationErrors` is
`{[s: string]: boolean}` as we discussed above.

## Creating a Custom Validator

Let's create a custom validator that checks if a username is already taken:

```typescript
export class CustomValidatorsComponent implements OnInit {
  myForm: FormGroup;
  takenUsernames = ['tarzan', 'jane'];

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required, this.usernameAvailable.bind(this)
      ])
    });
  }

  usernameAvailable(control: FormControl): ValidationErrors | null {
    if (this.takenUsernames.indexOf(control.value) >= 0) {
      return { usernameTaken: true };
    }
    return null;
  }
}
```

Now we can use the `username` input field in the template just like before, and check for the
`usernameTaken` error to display a specific validation error message:

```html
<div [hidden]="!hasError('username', 'usernameTaken')"
  class="text-danger">That username is taken.</div>
```

## Creating an Async Validator

Validators can be asynchronous, for example if we need to make an AJAX request to find out from the
server, whether or not the username is taken.

We can return a `Promise` or an `Observable` with `ValidationErrors` or `null`. For example:

```typescript
emailAvailable(control: FormControl): Promise<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (this.takenEmails.indexOf(control.value) >= 0) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 2000);
  });
}
```

When adding an async validator to a form control, we need to specify it as the **third** argument:

```typescript
email: new FormControl(null, null, this.emailAvailable.bind(this))
```

We can use the `pending` state to display a message while the validator is running:

```html
<div [hidden]="!isFieldState('email', 'pending')"
  class="text-danger">Checking...</div>
```

We'll want to use `pending` to disable the Submit button as well:

```html
<button type="submit" class="btn btn-primary btn-sm"
  [disabled]="myForm.pending || myForm.invalid">Submit Form</button>
```

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/custom-validators?file=src%2Fapp%2Fcustom-validators%2Fcustom-validators.component.ts)

[Contents](../README.md#angular-foxdonut)
