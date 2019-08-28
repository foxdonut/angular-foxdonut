import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styles: []
})
export class UsernameFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private usernameService: UsernameService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required, this.usernameAvailable.bind(this)
      ])
    });
  }

  usernameAvailable(control: FormControl): ValidationErrors | null {
    if (!this.usernameService.usernameAvailable(control.value)) {
      return { usernameTaken: true };
    }
    return null;
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
    const username = this.myForm.value.username;
    this.usernameService.createUsername(username);
    this.usernameService.usernameCreated.emit(username);
    this.myForm.reset();
  }
}
