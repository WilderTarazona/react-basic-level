import ShoppingCartHttp from "../../../features/shopping-cart/http/shopping-cart-http";

export const SHOPPING_CART_ACTIONS = {
  SET_ACTIVE_STEP_INDEX: "[SHOPPING_CART] SET ACTIVE STEP INDEX",
  SET_PRODUCTS_LIST: "[SHOPPING_CART] SET PRODUCTS LIST",
  SET_PRODUCTS_LIST_LOADING: "[SHOPPING_CART] SET PRODUCTS LIST LOADING",
  CART_ADD: "[SHOPPING_CART] ADD CART",
  CART_REMOVE: "[SHOPPING_CART] REMOVE CART",
  CART_UPDATE_QUANTITY: "[SHOPPING_CART] UPDATE CART QUANTITY",
};

const setActiveStepIndex = (payload) => ({
  type: SHOPPING_CART_ACTIONS.SET_ACTIVE_STEP_INDEX,
  payload,
});
const setProductsList = (payload) => ({
  type: SHOPPING_CART_ACTIONS.SET_PRODUCTS_LIST,
  payload,
});
const setProductsListLoading = () => ({
  type: SHOPPING_CART_ACTIONS.SET_PRODUCTS_LIST_LOADING,
});
const addCart = (payload) => ({
  type: SHOPPING_CART_ACTIONS.CART_ADD,
  payload,
});
const removeCart = (payload) => ({
  type: SHOPPING_CART_ACTIONS.CART_REMOVE,
  payload,
});
const updQuantityCart = (payload) => ({
  type: SHOPPING_CART_ACTIONS.CART_UPDATE_QUANTITY,
  payload,
});

const loadProducts = () => {
  return (dispatch, getState) => {
    const { isProductListLoaded } = getState().shoppingcart;
    console.log('isProductListLoaded', isProductListLoaded)
    if (isProductListLoaded) return;

    dispatch(setProductsListLoading());

    ShoppingCartHttp.getAllProduct().then((res) => {
      dispatch(setProductsList(res));
    });
  };
};

const ShoppingCartActions = {
  setActiveStepIndex,
  loadProducts,
  addCart,
  removeCart,
  updQuantityCart,
};

export default ShoppingCartActions;
