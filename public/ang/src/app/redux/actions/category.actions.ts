import { Action } from '@ngrx/store';

export const CATEGORIES_HOME_PAGE_LOADED =      '[Categories] Home Page Loaded';

export class CategoriesHomePageLoadedAction implements Action {
  readonly type = CATEGORIES_HOME_PAGE_LOADED;

  constructor(public payload: any) {}
}

export type Actions = CategoriesHomePageLoadedAction;
