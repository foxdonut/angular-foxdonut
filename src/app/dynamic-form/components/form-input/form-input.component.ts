import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-input',
  styles: [],
  template: `
    <div
      class="form-group"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        class="form-control"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
