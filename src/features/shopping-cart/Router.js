import React from "react";
// import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import ShoppingCartLayout from "./Layout/Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";

const Protected = ({ children }) => {
  // const { step1 } = useSelector((state) => state.purchase);
  // if (!(step1.plan && step1.account)) {
  //   return <Navigate to={"../paso-1"} replace />;
  // }

  return children;
};

const ShoppingCartRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ShoppingCartLayout />}>
        <Route index element={<Navigate to={"products"} replace />} />
        <Route path="products" element={<Products />}></Route>
        <Route
          path="cart"
          element={
            <Protected>
              <Cart />
            </Protected>
          }
        ></Route>
        <Route path="my-orders" element={<MyOrders />}></Route>
      </Route>
    </Routes>
  );
};

export default ShoppingCartRouter;
