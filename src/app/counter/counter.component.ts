import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../reducers';
import { increment, reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
    button { margin-left: 4px }
  `]
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(select(state => state.counter));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment({ amount: 1 }));
  }

  decrement() {
    this.store.dispatch(increment({ amount: -1 }));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
