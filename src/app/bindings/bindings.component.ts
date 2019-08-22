import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './bindings.component.html'
})
export class BindingsComponent implements OnInit {

  simpleValue = 'Hello, world';
  counter = 0;
  input = '';

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter++;
  }

  onInput(event: Event) {
    this.input = (event.target as HTMLInputElement).value;
  }
}
