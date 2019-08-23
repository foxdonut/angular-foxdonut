import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: []
})
export class TemplateFormComponent implements OnInit {
  submittedForm = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit1(form: NgForm) {
    console.log('submitted');
    this.submittedForm = JSON.stringify(form.value, null, 2);
  }
}
