# angular-foxdonut

[Contents](../README.md)

# Reactive Forms

To use reactive forms:

- In `app.module.ts`, add `ReactiveFormsModule` to the `imports`
- In the component, create a property of type `FormGroup`
- In `ngOnInit`, initialize the property to `new FormGroup({...})`. Each key is the name of the
  input, and the value is a `new FormControl(defaultValue)`.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/forms?file=src%2Fapp%2Freactive-form%2Freactive-form.component.ts)

[Contents](../README.md)
