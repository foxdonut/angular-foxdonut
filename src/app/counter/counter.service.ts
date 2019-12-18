import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../reducers';
import { increment, reset } from './counter.actions';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter$: Observable<number>;
  state$: Observable<State>;

  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(select(state => state.counter));
    this.state$ = store;
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
