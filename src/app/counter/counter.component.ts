import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { State } from '../reducers';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  state$: Observable<State>;
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.state$ = counterService.state$;
    this.counter$ = counterService.counter$;
  }

  ngOnInit() {
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
