import * as categoryActions from '../actions/category.actions';

export interface State {
  homePageList: any[];
  categoryData: any;
  products: any[];
}

const initialState: State = {
  homePageList: [],
  categoryData: null,
  products: []
};

export function reducer(state = initialState, action: categoryActions.Actions): State {
  switch(action.type) {

    case categoryActions.CATEGORIES_HOME_PAGE_LOADED: {
      return Object.assign({}, state, {
        homePageList: action.payload
      });
    }

    case categoryActions.CATEGORY_DATA_LOADED: {
      return Object.assign({}, state, {
        categoryData: action.payload
      });
    }

    case categoryActions.CATEGORY_PRODUCTS_LOADED: {
      return Object.assign({}, state, {
        products: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getCategoriesForHomePage = (state: State) => state.homePageList;
export const getCategoryData = (state: State) => state.categoryData;
export const getProducts = (state: State) => state.products;
