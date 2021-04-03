# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Using ngrx-forms

Instead of storing the state of form controls inside the components we put them in the ngrx store.
We update the state with actions which allows easy debugging just like any other redux application.
ngrx-forms also provides powerful mechanisms to update, validate and generally manage large complex
forms. It contains APIs for synchronous and asynchronous validation, creating dynamic forms,
integrating with custom form elements, and much more.

## Setup

Install `ngrx-forms`:

```
npm i ngrx-forms
```

Import the module:

```typescript
import { NgrxFormsModule } from 'ngrx-forms';

imports: [
  NgrxFormsModule
]
```

Add the reducer:

```typescript
import { createReducer } from '@ngrx/store';
import { onNgrxForms } from 'ngrx-forms';

interface State {
  // ....
}

const initialState: State = {
  // ...
};

export const appReducer = createReducer(
  initialState,
  onNgrxForms(),
  // ...
);
```

## Connecting Form State to Component

In the component, obtain the form state from the store:

```typescript
formState$: Observable<FormGroupState<State>>;

constructor(private store: Store<AppState>) {
  this.formState$ = store.select(s => s.myForm);
}
```

[Contents](../README.md#angular-foxdonut)
