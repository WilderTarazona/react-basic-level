import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Box, Button, FormLabel } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import useShoppingCart from "../../../core/store/shopping-cart/useShoppingCart";
import ShoppingCartActions from "../../../core/store/shopping-cart/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useShoppingCart();

  useEffect(() => {
    dispatch(ShoppingCartActions.setActiveStepIndex(1));
  }, [dispatch]);

  const goBack = () => {
    navigate("../products");
  };

  const increase = (id) => {
    console.log("incrementando");
    dispatch(ShoppingCartActions.updQuantityCart({ id: id, quantity: 1 }));
  };

  const decrease = (id) => {
    console.log("decrementando");
    dispatch(ShoppingCartActions.updQuantityCart({ id: id, quantity: -1 }));
  };

  const remove = (id) => {
    console.log("removiendo");
    dispatch(ShoppingCartActions.removeCart([id]));
  };

  return (
    <Box>
      <form>
        <div style={{marginBottom: "10px"}}>Carro ({cart.length} productos)</div>
        {/*
          Aqui mostrar los productos agregados con cantidad 1 por defecto,
          permitir modificar la cantidad,
          permitir remover un producto
        */}
        <Box sx={{
          marginBottom: "20px",
          textAlign: "center",
          overflow: 'auto',
          maxHeight: 300,
        }}>

          {cart.map((item) => (
            <ListItem
              key={item.id}
              disableGutters
              secondaryAction={
                <div>
                  <IconButton
                    aria-label="increase"
                    onClick={() => increase(item.id)}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <span>{item.quantity}</span>
                  <IconButton
                    aria-label="decrease"
                    onClick={() => decrease(item.id)}
                    disabled={item.quantity === 1}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => remove(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              }
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
          { cart === null || cart.length === 0 ? 'Tu Carro está vacío' : '' }

        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button type="button" variant="outlined" onClick={goBack}>
            Agregar productos
          </Button>
          <Button type="submit" variant="contained" color="success">
            Comprar
          </Button>
        </Box>

      </form>

      {/* <pre style={{ fontSize: 10 }}>{JSON.stringify(cart, null, 4)}</pre> */}
    </Box>
  );
};

export default Cart;
