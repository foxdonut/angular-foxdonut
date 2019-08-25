import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: []
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f', { static: false }) myForm: NgForm;
  choices = ['Internet', 'Phone', 'Word of mouth', 'Other'];
  genders = ['Female', 'Male', 'Non-binary'];
  submittedForm = '';

  constructor() { }

  ngOnInit() {
  }

  suggestUsername() {
    // This only sets the specified values and leaves the rest unchanged
    this.myForm.form.patchValue({
      userData: {
        username: 'Suggested'
      }
    });
  }

  onSubmit(myForm: NgForm) {
    this.submittedForm = JSON.stringify(myForm.value, null, 2);
  }

  onReset(myForm: NgForm) {
    myForm.reset();
  }
}
