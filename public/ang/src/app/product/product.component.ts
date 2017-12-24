import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Store } from '@ngrx/store';
import * as rootReducer from '../redux/reducers/app.reducer';
import * as loaderActions from '../redux/actions/loader.actions';
import * as cartActions from '../redux/actions/cart.actions';

import { AppService } from '../core/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = null;
  quantity: number = 1;

  constructor(private appService: AppService, private store: Store<rootReducer.State>,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params: Params) => this.loadData(params['productId']));
  }

  ngOnInit() {
    this.store.dispatch(new loaderActions.LoaderSetStateAction(true));
  }

  loadData(productId) {
    this.appService.getProductData(productId).subscribe(
      (resp) => {
        this.product = resp;
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      },
      (err) => {
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      }
    );
  }

  handleAddToCart() {
    this.store.dispatch(new cartActions.CartProductAddAction({item: this.product, quantity: this.quantity}));
  }

  handleIncreaseQuan() {
    this.quantity++;
  }

  handleDecreaseQuan() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
