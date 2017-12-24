import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rootReducer from '../../../redux/reducers/app.reducer';

@Component({
  selector: 'app-header-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity: number;
  amount: number;

  constructor(private store: Store<rootReducer.State>) {
    store.select(rootReducer.getCartQuantity).subscribe(resp => this.quantity = resp);
    store.select(rootReducer.getCartAmount).subscribe(resp => this.amount = resp);
  }

  ngOnInit() {
  }

}
