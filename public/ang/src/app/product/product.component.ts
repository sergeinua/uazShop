import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Store } from '@ngrx/store';
import * as rootReducer from '../redux/reducers/app.reducer';
import * as loaderActions from '../redux/actions/loader.actions';

import { AppService } from '../core/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = null;

  constructor(private appService: AppService, private store: Store<rootReducer.State>, private activatedRoute: ActivatedRoute) {
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
}
