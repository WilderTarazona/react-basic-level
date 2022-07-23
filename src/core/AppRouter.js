import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ShoppingCartstore from './store';

const ShoppingCart = lazy(() => import('../features/shopping-cart/Router'));

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/shopping-cart'} replace />} />
          <Route path='/shopping-cart/*' element={
            <Provider store={ShoppingCartstore}>
              <ShoppingCart />
            </Provider>
          } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;