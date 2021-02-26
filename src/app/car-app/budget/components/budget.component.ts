import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BudgetState } from '../reducers';
import { selectCarClass } from '../car-class/car-class.actions';
import { selectCarType } from '../car-type/car-type.actions';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  carClasses = [
    { id: 2, label: 'Budget' },
    { id: 4, label: 'Economy' },
    { id: 6, label: 'Standard' },
    { id: 8, label: 'Luxury' }
  ];

  carTypes = [
    { id: 2, label: 'Hatchback' },
    { id: 4, label: 'Sedan' },
    { id: 6, label: 'SUV' },
    { id: 8, label: 'Pickup' },
    { id: 10, label: 'Van' }
  ];

  budgetForm: FormGroup;

  constructor(private store: Store<BudgetState>) { }

  ngOnInit() {
    this.budgetForm = new FormGroup({
      carClass: new FormControl(),
      carType: new FormControl()
    });

    this.budgetForm.get('carClass').valueChanges.subscribe(selected => {
      this.store.dispatch(selectCarClass({ selected }));
    });

    this.budgetForm.get('carType').valueChanges.subscribe(selected => {
      this.store.dispatch(selectCarType({ selected }));
    });
  }
}
