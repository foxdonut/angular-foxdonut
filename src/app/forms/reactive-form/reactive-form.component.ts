import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  choices = ['Internet', 'Phone', 'Word of mouth', 'Other'];
  genders = ['Female', 'Male', 'Non-binary'];
  submittedForm = '';

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('default@me.com'),
      username: new FormControl(),
      password: new FormControl(),
      howDidYouHear: new FormControl(),
      gender: new FormControl()
    });
  }

  onSubmit() {
    this.submittedForm = JSON.stringify(this.myForm.value, null, 2);
  }
}
