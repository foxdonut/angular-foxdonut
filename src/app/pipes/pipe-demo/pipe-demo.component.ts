import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styles: []
})
export class PipeDemoComponent implements OnInit {
  nowValue = Date.now();

  constructor() { }

  ngOnInit() {
  }

  now(): number {
    return this.nowValue;
  }
}
