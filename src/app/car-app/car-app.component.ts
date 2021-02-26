import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../reducers';

@Component({
  selector: 'app-car-app',
  templateUrl: './car-app.component.html'
})
export class CarAppComponent implements OnInit {
  state$: Observable<State>;

  constructor(private store: Store<State>) {
    this.state$ = store;
  }

  ngOnInit() {
  }
}
