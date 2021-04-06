import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-demo-two',
  templateUrl: './dynamic-demo-two.component.html',
  styles: []
})
export class DynamicDemoTwoComponent implements OnInit {

  metadata = [
    {
      id: 1,
      label: 'One',
      type: 'checkbox'
    },
    {
      id: 2,
      label: 'Two',
      type: 'checkbox'
    },
    {
      id: 4,
      label: 'Details',
      type: 'textfield',
      value: 'Previous value here'
    },
    {
      id: 6,
      label: 'Explanation',
      type: 'textarea'
    },
    {
      id: 8,
      label: 'Indication',
      type: 'select',
      options: [
        {
          id: 31,
          label: 'Small'
        },
        {
          id: 21,
          label: 'Medium'
        },
        {
          id: 11,
          label: 'Large'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
