import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as rootReducer from '../redux/reducers/app.reducer';

import { AppService } from '../core/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[];

  constructor(private store: Store<rootReducer.State>, private appService: AppService) {
    store.select(rootReducer.getCartItems).subscribe(resp => this.loadData(resp));
  }

  ngOnInit() {
  }

  loadData(items) {
    this.cartItems = [];
    items.map((item) => {
      this.appService.getProductData(item.productId).subscribe(
        (resp) => {
          this.cartItems.push({
            id: item.productId,
            imgUrl: resp.imageUrl,
            description: resp.title,
            quantity: item.quantity,
            price: resp.price
          });
        }
      )
    });
  }

  getTotalCartAmount() {
    let result = 0;
    this.cartItems.map((item) => {
      result += item.quantity * item.price;
    });
    return result;
  }

}
