import { Action } from '@ngrx/store';

export const SET_LOADER_STATE = '[Loader] Set State';

export class LoaderSetStateAction implements Action {
  readonly type = SET_LOADER_STATE;

  constructor(public payload: boolean) {}
}

export type Actions = LoaderSetStateAction;
