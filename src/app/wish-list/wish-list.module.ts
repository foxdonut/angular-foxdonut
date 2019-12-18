import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromWishList from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWishList.wishListFeatureKey, fromWishList.reducers, { metaReducers: fromWishList.metaReducers })
  ]
})
export class WishListModule { }
