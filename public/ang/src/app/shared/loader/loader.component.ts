import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rootReducer from '../../redux/reducers/app.reducer';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  visible: boolean = false;

  constructor(private store: Store<rootReducer.State>) {
    store.select(rootReducer.loaderIsVisible).subscribe(state => this.visible = state);
  }

  ngOnInit() {
  }

}
