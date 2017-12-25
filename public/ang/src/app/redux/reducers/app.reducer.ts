import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromLoader from './loader.reducer';
import * as fromCategory from './category.reducer';
import * as fromCart from './cart.reducer';
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  loader: fromLoader.State;
  category: fromCategory.State;
  cart: fromCart.State;
}
/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  loader: fromLoader.reducer,
  category: fromCategory.reducer,
  cart: fromCart.reducer
};
// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: any = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getLoaderState = (state: State) => state.loader;
export const loaderIsVisible = createSelector(getLoaderState, fromLoader.getLoaderState);

export const getCategoryState = (state: State) => state.category;
export const getCategories = createSelector(getCategoryState, fromCategory.getCategories);
export const getCategoryData = createSelector(getCategoryState, fromCategory.getCategoryData);
export const getCategoryProducts = createSelector(getCategoryState, fromCategory.getProducts);

export const getCartState = (state: State) => state.cart;
export const getCartItems = createSelector(getCartState, fromCart.getItems);
export const getCartQuantity = createSelector(getCartState, fromCart.getQuantity);
export const getCartAmount = createSelector(getCartState, fromCart.getAmount);
