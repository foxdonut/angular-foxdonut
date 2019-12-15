import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../reducers';
import { increment, reset } from './counter.actions';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
    button { margin-left: 4px }
  `]
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private counterService: CounterService) {
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
