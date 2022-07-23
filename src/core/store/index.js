import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ShoppingCartReducer from './shopping-cart/reducer';

const reducers = combineReducers({
  shoppingcart: ShoppingCartReducer
});

const ShoppingCartstore = createStore(reducers, applyMiddleware(thunk));

export default ShoppingCartstore;
