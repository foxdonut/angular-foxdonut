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
        username: new FormControl(null, Validators.required),
        password: new FormControl()
      }),
      howDidYouHear: new FormControl(),
      gender: new FormControl(),
      otherItems: new FormArray([])
    });
  }

  isFieldState(field: string, state: string) {
    const control = (this.myForm.controls.userData as FormGroup).controls[field];
    return control.touched && control[state];
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
