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
    store.select(rootReducer.getCategories).subscribe(resp => this.categories = resp);
  }

  ngOnInit() {

  }
}
