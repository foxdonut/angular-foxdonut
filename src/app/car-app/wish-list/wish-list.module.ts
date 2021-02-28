import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { wishListFeatureKey, wishListReducers } from './reducers';
import { WishListComponent } from './components/wish-list.component';

@NgModule({
  declarations: [
    WishListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(wishListFeatureKey, wishListReducers)
  ],
  exports: [
    WishListComponent
  ]
})
export class WishListModule { }
