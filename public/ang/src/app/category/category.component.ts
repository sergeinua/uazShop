import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';

import * as rootReducer from '../redux/reducers/app.reducer';
import * as loaderActions from '../redux/actions/loader.actions';
import * as categoryActions from '../redux/actions/category.actions';

import { AppService } from '../core/app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: any = null;
  products: any[] = [];

  constructor(private store: Store<rootReducer.State>, private activatedRoute: ActivatedRoute,
              private appService: AppService) {
    activatedRoute.params.subscribe((params: Params) => this.loadData(params['categoryId']));
    store.select(rootReducer.getCategoryData).subscribe(resp => this.category = resp);
    store.select(rootReducer.getCategoryProducts).subscribe(resp => this.products = resp);
  }

  ngOnInit() {
    this.store.dispatch(new loaderActions.LoaderSetStateAction(true));
  }

  loadData(categoryId) {
    let catDataObs = this.appService.getCategoryData(categoryId),
      catProdObs = this.appService.getCategoryProducts(categoryId);
    Observable.combineLatest(catDataObs, catProdObs).subscribe(
      (resp) => {
        this.store.dispatch(new categoryActions.CategoryDataLoadedAction(resp[0]));
        this.store.dispatch(new categoryActions.CategoryProductsLoadedAction(resp[1]));
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      },
      (err) => {
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      }
    );
  }
}
