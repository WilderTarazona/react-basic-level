import Http from '../../../common/http';

const endpointProduct = 'http://localhost:3001/product';
const endpointOrder = 'http://localhost:3001/purchaseOrder';

const getAllProduct = () => {
  return Http.get(endpointProduct);
}

const postOrder = (payload) => {
  return Http.post(endpointOrder, payload);
}

const getAllOrder = () => {
  return Http.get(endpointOrder);
}

const ShoppingCartHttp = {
  getAllProduct,
  getAllOrder,
  postOrder
}

export default ShoppingCartHttp;