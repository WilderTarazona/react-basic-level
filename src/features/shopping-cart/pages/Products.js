import { Button, FormLabel, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingCartActions from "../../../core/store/shopping-cart/actions";
import useShoppingCart from "../../../core/store/shopping-cart/useShoppingCart";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre", width: 430 },
];

const Products = () => {
  const { productList, cart } = useShoppingCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectionModel, setSelectionModel] = useState(() =>
    cart.map((item) => item.id)
  );

  useEffect(() => {
    dispatch(ShoppingCartActions.loadProducts());
  }, [dispatch]);

  const goShoppingCart = () => {
    navigate("../cart");
  };

  return (
    <form>
      <div style={{ marginBottom: "10px" }}>Seleccione los Productos a comprar:</div>

      {/*
          Aqui mostrar los productos obtenidos de un servicio,
          con un checkout a la izquierda para agregar al carrito de compras
        */}

      <Box style={{ height: 400, width: "100%", marginBottom: "20px" }}>
        <DataGrid
          rows={productList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          selectionModel={selectionModel}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            // const selectedRows = productList.filter((row) => selectedIDs.has(row.id), );

            console.log("cart", cart);
            let toAdd = [];
            selectedIDs.forEach((id) => {
              const exist = cart.some((item) => item.id === id);
              if (!exist)
                toAdd.push(productList.find((item) => item.id === id));
            });

            console.log("toAdd", toAdd);

            dispatch(ShoppingCartActions.addCart(toAdd));

            let toRemove = [];
            cart.forEach((element) => {
              const exist = selectedIDs.has(element.id);
              if (!exist) toRemove.push(element.id);
            });

            console.log("toRemove", toRemove);

            dispatch(ShoppingCartActions.removeCart(toRemove));

            setSelectionModel(ids);
          }}
        />
      </Box>

      <Box sx={{textAlign: "center"}}>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={goShoppingCart}
        >
          Ir al carrito
        </Button>
      </Box>
      

      {/* <pre style={{ fontSize: 10 }}>{JSON.stringify(cart, null, 4)}</pre> */}
    </form>
  );
};

export default Products;
