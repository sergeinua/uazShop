import * as loaderActions from '../actions/loader.actions';

export interface State {
  visible: boolean;
}

const initialState: State = {
  visible: false
};

export function reducer(state = initialState, action: loaderActions.Actions): State {
  switch(action.type) {
    case loaderActions.SET_LOADER_STATE: {
      return Object.assign({}, state, {
        visible: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

export const getLoaderState = (state: State) => state.visible;
