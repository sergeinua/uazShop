import * as categoryActions from '../actions/category.actions';

export interface State {
  homePageList: any[];
}

const initialState: State = {
  homePageList: []
};

export function reducer(state = initialState, action: categoryActions.Actions): State {
  switch(action.type) {
    case categoryActions.CATEGORIES_HOME_PAGE_LOADED: {
      return Object.assign({}, state, {
        homePageList: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

export const getCategoriesForHomePage = (state: State) => state.homePageList;
