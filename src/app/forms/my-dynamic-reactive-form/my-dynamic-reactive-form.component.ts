import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-dynamic-reactive-form',
  templateUrl: './my-dynamic-reactive-form.component.html'
})
export class MyDynamicReactiveFormComponent implements OnInit {
  form: FormGroup;
  items: any[];
  formSerial: string;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.items = [
      { id: 142, dynamicType: 'checkbox', label: 'Dynamic checkbox 1', defaultValue: null },
      { id: 224, dynamicType: 'text', label: 'Dynamic text field 1', defaultValue: null },
      { id: 42, dynamicType: 'checkbox', label: 'Dynamic checkbox 2', defaultValue: true },
      { id: 24, dynamicType: 'text', label: 'Dynamic text field 2', defaultValue: 'Yes' },
      { id: 840, dynamicType: 'checktext', label: 'Your Options', defaultValue: null, options: [
        { id: 2840, optionValue: 'Netflix', text: 'Because everyone has it', defaultOption: true },
        { id: 2841, optionValue: 'Amazon', text: 'Only place for some shows', defaultOption: false },
        { id: 2842, optionValue: 'Crave', text: 'This one might be Canadian', defaultOption: false },
        { id: 2843, optionValue: 'Hulu', text: 'What a fun name', defaultOption: false }
      ]}
    ];
    this.form = this.formBuilder.group(
      this.items.reduce(
        (result, next) => {
          const key = `q_${next.id}`;
          next.key = key;

          if (next.options?.length > 0) {
            result[key] = this.formBuilder.group(next.options.reduce((controls, option) => {
              option.keyCheck = `${option.id}_check`;
              option.keyText  = `${option.id}_text`;

              controls[option.keyCheck] = new FormControl(option.defaultOption);
              controls[option.keyText] = new FormControl({ value: option.text, disabled: !option.defaultOption });

              controls[option.keyCheck].valueChanges.subscribe(checked => {
                if (checked) {
                  controls[option.keyText].enable();
                } else {
                  controls[option.keyText].disable();
                }
              });

              return controls;
            }, {}));
          } else {
            result[key] = [next.defaultValue];
          }
          return result;
        },
        {}
      )
    );
  }

  onSubmit(): void {
    this.formSerial = JSON.stringify(this.form.value);
  }
}
