import { SHOPPING_CART_ACTIONS } from './actions'
import initialState from './state';

// const initialState = {
// 	activeStepIndex: 0,
// 	productList: [],
// 	isProductListLoading: false,
// 	isProductListLoaded: false,
// 	cart: [],
// }

const ShoppingCartReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOPPING_CART_ACTIONS.SET_ACTIVE_STEP_INDEX:
      return {
        ...state,
        activeStepIndex: action.payload
      }

    case SHOPPING_CART_ACTIONS.SET_PRODUCTS_LIST:
      return {
        ...state,
        productList: action.payload,
				isProductListLoaded: true,
				isProductListLoading: false
      }

		case SHOPPING_CART_ACTIONS.SET_PRODUCTS_LIST_LOADING:
			return {
				...state,
				isProductListLoading: true
			}

    case SHOPPING_CART_ACTIONS.CART_ADD:
			const newItems = action.payload.map((item) => {
				return  {
					...item,
					quantity: 1
				}
			});
      return {
        ...state,
        cart: [...state.cart, ...newItems],
      }
		
		case SHOPPING_CART_ACTIONS.CART_REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => !action.payload.includes(item.id)),
			}

		case SHOPPING_CART_ACTIONS.CART_UPDATE_QUANTITY:
			console.log('action.payload', action.payload);
			console.log('state.cart', state.cart);
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.id === action.payload.id) {
						return { 
							...item,
							quantity: item.quantity + action.payload.quantity
						};
					}
					return item;
				}),
			}

    default:
      return { ...state }
  }
}

export default ShoppingCartReducer;