import * as cartActions from '../actions/cart.actions';
import * as _  from 'lodash';

interface cartItem {
  productId: number;
  quantity: number;
};

export interface State {
  items: cartItem[];
  quantity: number;
  amount: number;
}

const initialState: State = {
  items: [],
  quantity: 0,
  amount: 0
};

export function reducer(state = initialState, action: cartActions.Actions): State {
  switch(action.type) {

    case cartActions.CART_PRODUCT_ADD: {
      let items  = _.cloneDeep(state.items),
        amount = _.cloneDeep(state.amount),
        quantity = _.cloneDeep(state.quantity),
        itemQuantity = action.payload.quantity || 1,
        existingItem = items.find(item => item.productId === action.payload.item.id);
      if (existingItem) {
        existingItem.quantity += itemQuantity;
      } else {
        items.push({
          productId: action.payload.item.id,
          quantity: itemQuantity
        });
      }
      quantity += itemQuantity;
      amount += action.payload.item.price * itemQuantity;
      return Object.assign({}, state, { items, quantity, amount });
    }

    case cartActions.CART_PRODUCT_DELETE: {
      let items  = _.cloneDeep(state.items);
      items = items.filter(item => item.productId !== action.payload.id);
      //TODO: calculations here
      return Object.assign({}, state, { items });
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: State) => state.items;
export const getQuantity = (state: State) => state.quantity;
export const getAmount = (state: State) => state.amount;
