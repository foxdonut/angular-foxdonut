import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-reactive-form',
  templateUrl: './validation-reactive-form.component.html',
  styles: []
})
export class ValidationReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  choices = ['Internet', 'Phone', 'Word of mouth', 'Other'];
  genders = ['Female', 'Male', 'Non-binary'];
  submittedForm = '';

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('default@me.com', Validators.email),
        username: new FormControl(null, [
          Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')
        ]),
        password: new FormControl()
      }),
      howDidYouHear: new FormControl(),
      frequency: new FormControl(null, [Validators.min(0), Validators.max(7)]),
      gender: new FormControl(),
      otherItems: new FormArray([])
    });
  }

  getUserControl(field: string): FormControl {
    return (this.myForm.controls.userData as FormGroup).controls[field] as FormControl;
  }

  getControl(field: string): FormControl {
    return this.myForm.controls[field] as FormControl;
  }

  isUserFieldState(field: string, state: string) {
    const control = this.getUserControl(field);
    return control.touched && control[state];
  }

  isFieldState(field: string, state: string) {
    const control = this.getControl(field);
    return control.touched && control[state];
  }

  hasUserError(field: string, errorType: string) {
    const control = this.getUserControl(field);
    return control.touched && control.hasError(errorType);
  }

  hasError(field: string, errorType: string) {
    const control = this.getControl(field);
    return control.touched && control.hasError(errorType);
  }

  onAddItem() {
    const control = new FormControl();
    (this.myForm.get('otherItems') as FormArray).push(control);
  }

  suggestUsername() {
    // This only sets the specified values and leaves the rest unchanged
    this.myForm.patchValue({
      userData: {
        username: 'Suggested'
      }
    });
  }

  onSubmit() {
    this.submittedForm = JSON.stringify(this.myForm.value, null, 2);
  }

  onReset() {
    this.myForm.reset();
  }
}
