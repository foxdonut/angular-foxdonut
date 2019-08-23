import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './using-directives.component.html',
  styleUrls: ['./using-directives.component.css']
})
export class UsingDirectivesComponent implements OnInit {
  counter = 0;
  items = [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
    { name: 'four' }
  ];

  constructor() { }

  ngOnInit() {
  }

  increment(value: number) {
    this.counter += value;
  }
}
