import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-two',
  templateUrl: './dynamic-form-two.component.html',
  styles: []
})
export class DynamicFormTwoComponent implements OnInit {
  @Input() metadata: any[];
  form: FormGroup;
  formSerial = '';

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup(
      this.metadata.reduce(
        (result, next) => {
          const key = this.getFormControlName(next);
          result[key] = new FormControl(next.value || '');
          return result;
        },
        {}
      )
    );
  }

  getFormControlName(meta: any): string {
    return 'question_' + meta.id;
  }

  onSubmit() {
    this.formSerial = JSON.stringify(this.form.value);
  }
}
