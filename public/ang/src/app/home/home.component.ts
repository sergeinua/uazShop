import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as rootReducer from '../redux/reducers/app.reducer';
import * as loaderActions from '../redux/actions/loader.actions';
import * as categoryActions from '../redux/actions/category.actions';

import { AppService } from '../core/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any[];

  constructor(private appService: AppService, private store: Store<rootReducer.State>) {
    store.select(rootReducer.getCategoriesForHomePage).subscribe(resp => this.categories = resp);
  }

  ngOnInit() {
    this.store.dispatch(new loaderActions.LoaderSetStateAction(true));
    this.appService.getCategoriesForHomePage().subscribe(
      (resp) => {
        this.store.dispatch(new categoryActions.CategoriesHomePageLoadedAction(resp));
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      },
      (err) => {
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      }
    )
  }
}
