import * as categoryActions from '../actions/category.actions';

export interface State {
  list: any[];
  categoryData: any;
  products: any[];
}

const initialState: State = {
  list: [],
  categoryData: null,
  products: []
};

export function reducer(state = initialState, action: categoryActions.Actions): State {
  switch(action.type) {

    case categoryActions.CATEGORY_LIST_LOADED: {
      return Object.assign({}, state, {
        list: action.payload
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

export const getCategories = (state: State) => state.list;
export const getCategoryData = (state: State) => state.categoryData;
export const getProducts = (state: State) => state.products;
