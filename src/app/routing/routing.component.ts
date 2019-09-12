import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styles: [`
    a.active {
      color: red;
    }
  `]
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
