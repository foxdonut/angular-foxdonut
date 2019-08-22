import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-options-style',
  templateUrl: './component-options-style.component.html',
  styles: [`
    p { color: mediumpurple }
  `]
})
export class ComponentOptionsStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
