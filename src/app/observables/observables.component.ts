import { Component, OnInit } from '@angular/core';
import { ValidationErrors, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit {
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

  emailAvailable(control: FormControl): Observable<ValidationErrors | null> {
    return Observable.create((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (this.takenEmails.indexOf(control.value) >= 0) {
          observer.next({ emailTaken: true });
          observer.complete();
        } else {
          observer.next(null);
          observer.complete();
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
