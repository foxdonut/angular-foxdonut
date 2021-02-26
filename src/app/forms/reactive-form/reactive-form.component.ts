import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
  otherItems: FormArray;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('default@me.com'),
        username: new FormControl(),
        password: new FormControl()
      }),
      howDidYouHear: new FormControl(),
      gender: new FormControl(),
      otherItems: new FormArray([])
    });
    this.otherItems = (this.myForm.get('otherItems') as FormArray);
  }

  onAddItem() {
    const control = new FormControl();
    this.otherItems.push(control);
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
