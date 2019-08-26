import { Component, OnInit } from '@angular/core';
import { ValidationErrors, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styles: []
})
export class CustomValidatorsComponent implements OnInit {
  myForm: FormGroup;
  takenUsernames = ['tarzan', 'jane'];
  takenEmails = ['tarzan@jungle.com', 'jane@jungle.com'];
  submittedForm = '';

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required, this.usernameAvailable.bind(this)
      ]),
      email: new FormControl(null, null, this.emailAvailable.bind(this))
    });
  }

  usernameAvailable(control: FormControl): ValidationErrors | null {
    if (this.takenUsernames.indexOf(control.value) >= 0) {
      return { usernameTaken: true };
    }
    return null;
  }

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

  getControl(field: string): FormControl {
    return this.myForm.controls[field] as FormControl;
  }

  isFieldState(field: string, state: string) {
    const control = this.getControl(field);
    return control.touched && control[state];
  }

  hasError(field: string, errorType: string) {
    const control = this.getControl(field);
    return control.touched && control.hasError(errorType);
  }

  onSubmit() {
    this.submittedForm = JSON.stringify(this.myForm.value, null, 2);
  }

  onReset() {
    this.myForm.reset();
  }
}
