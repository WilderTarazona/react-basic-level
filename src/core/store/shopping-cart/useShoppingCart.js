import { useSelector } from 'react-redux';
import ShoppingCartSelector from './selector';

const useShoppingCart = () => useSelector(ShoppingCartSelector);

export default useShoppingCart;