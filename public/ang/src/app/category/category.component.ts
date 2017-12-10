import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rootReducer from '../redux/reducers/app.reducer';
import * as loaderActions from '../redux/actions/loader.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private store: Store<rootReducer.State>) { }

  ngOnInit() {
  }

}
