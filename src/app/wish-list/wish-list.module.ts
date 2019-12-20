import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromWishList from './reducers';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [WishListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWishList.wishListFeatureKey, fromWishList.reducers, { metaReducers: fromWishList.metaReducers })
  ],
  exports: [
    WishListComponent
  ]
})
export class WishListModule { }
