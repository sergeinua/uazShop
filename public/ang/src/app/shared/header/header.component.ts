import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rootReducer from '../../redux/reducers/app.reducer';
import * as loaderActions from '../../redux/actions/loader.actions';
import * as categoryActions from '../../redux/actions/category.actions';

import { AppService } from '../../core/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any[];

  constructor(private store: Store<rootReducer.State>, private appService: AppService) {
    store.select(rootReducer.getCategories).subscribe(resp => this.categories = resp);
  }

  ngOnInit() {
    this.store.dispatch(new loaderActions.LoaderSetStateAction(true));
    this.appService.getCategories().subscribe(
      (resp) => {
        this.store.dispatch(new categoryActions.CategoriyListLoadedAction(resp));
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      },
      (err) => {
        this.store.dispatch(new loaderActions.LoaderSetStateAction(false));
      }
    )
  }

}
