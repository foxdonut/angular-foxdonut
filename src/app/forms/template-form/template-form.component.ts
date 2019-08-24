import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: []
})
export class TemplateFormComponent implements OnInit {
  // @ViewChild('f') myForm: NgForm;
  choices = ['Internet', 'Phone', 'Word of mouth', 'Other'];
  genders = ['Female', 'Male', 'Non-binary'];
  submittedForm = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    this.submittedForm = JSON.stringify(myForm.value, null, 2);
  }

  onReset(myForm: NgForm) {
    myForm.reset();
  }
}
