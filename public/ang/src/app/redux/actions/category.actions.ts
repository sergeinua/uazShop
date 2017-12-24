import { Action } from '@ngrx/store';

export const CATEGORIES_HOME_PAGE_LOADED =      '[Categories] Home Page Loaded';
export const CATEGORY_DATA_LOADED =             '[Category] Data Loaded';
export const CATEGORY_PRODUCTS_LOADED =         '[Category] Products Loaded';

export class CategoriesHomePageLoadedAction implements Action {
  readonly type = CATEGORIES_HOME_PAGE_LOADED;

  constructor(public payload: any) {}
}

export class CategoryDataLoadedAction implements Action {
  readonly type = CATEGORY_DATA_LOADED;

  constructor(public payload: any) {}
}

export class CategoryProductsLoadedAction implements Action {
  readonly type = CATEGORY_PRODUCTS_LOADED;

  constructor(public payload: any) {}
}

export type Actions = CategoriesHomePageLoadedAction
  | CategoryDataLoadedAction
  | CategoryProductsLoadedAction;
