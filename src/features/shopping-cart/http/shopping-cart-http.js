import Http from '../../../common/http';

const endpoint = 'http://localhost:3001/product'

const getAllProduct = () => {
  return Http.get(endpoint)
}

const ShoppingCartHttp = {
  getAllProduct
}

export default ShoppingCartHttp;