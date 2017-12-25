import { Action } from '@ngrx/store';

export const CATEGORY_LIST_LOADED =             '[Categories] List Loaded';
export const CATEGORY_DATA_LOADED =             '[Category] Data Loaded';
export const CATEGORY_PRODUCTS_LOADED =         '[Category] Products Loaded';

export class CategoriyListLoadedAction implements Action {
  readonly type = CATEGORY_LIST_LOADED;

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

export type Actions = CategoriyListLoadedAction
  | CategoryDataLoadedAction
  | CategoryProductsLoadedAction;
