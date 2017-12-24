import { Action } from '@ngrx/store';

export const CART_PRODUCT_ADD =          '[Cart] Product Add';
export const CART_PRODUCT_DELETE =       '[Cart] Product Delete';

export class CartProductAddAction implements Action {
  readonly type = CART_PRODUCT_ADD;

  constructor(public payload: any) {}
}

export class CartProductDeleteAction implements Action {
  readonly type = CART_PRODUCT_DELETE;

  constructor(public payload: any) {}
}

export type Actions = CartProductAddAction
  | CartProductDeleteAction;
