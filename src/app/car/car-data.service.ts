import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Car } from './car.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CarDataService extends DefaultDataService<Car> {
  constructor(http: HttpClient, urlGenerator: HttpUrlGenerator) {
    super('Car', http, urlGenerator);
  }

  getAll(): Observable<Car[]> {
    return this.http.get('/path/to/cars').pipe(map((response: any) => response.records));
  }
}
