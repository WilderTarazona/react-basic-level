import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Box, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Collapse from "@mui/material/Collapse";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import ShoppingCartHttp from "../http/shopping-cart-http";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  // const [open, setOpen] = React.useState(true);

  useEffect(() => {
    ShoppingCartHttp.getAllOrder().then((res) => {
      console.log("orders", res);
      setOrders(res);
    });
  }, [setOrders]);

  const goProducts = () => {
    navigate("../products");
  };

  const goCart = () => {
    navigate("../cart");
  };

  // const handleClick = (item) => {
  //   setOpen(!open);
  //   item.open = !item.open
  // };

  return (
    <Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {orders.map((item) => (
          <Box key={item.id} sx={{border: 1, borderColor:"primary.main"}}>
            {/* <ListItem onClick={item.open = !item.open}>
              <ListItemAvatar>
                <Avatar>
                  <BookmarkBorderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.number}
                secondary={new Intl.DateTimeFormat("es-ES", { dateStyle: "full", timeStyle: "long", }).format(new Date(item.createdDate))}
              />
              {item.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem> */}
            <ListItemButton
            sx={{ backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7], }}
              onClick={() => { console.log('open before', item.open); item.open = !item.open; console.log('open after', item.open); }}>
              <ListItemIcon>
                <BookmarkBorderIcon />
              </ListItemIcon>
              <ListItemText
                primary={`Numero de orden: ${item.number}`}
                secondary={`Fecha compra: ${new Intl.DateTimeFormat("es-ES", { dateStyle: "full", timeStyle: "long", }).format(new Date(item.createdDate))}`}
              />
              {item.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {/* <Collapse in={item.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <BookmarkBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse> */}
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.products.map((x) => {
                  console.log('key para sub-hijos', `${item.id}_${x.id}`)
                return (
                  <ListItem key={`${item.id}${x.id}`}>
                    <ListItemAvatar>
                      <Avatar>
                        <BookmarkBorderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`Producto: ${x.name}`}
                      secondary={`Cantidad: ${x.quantity}`}
                    />
                  </ListItem>
                )
              }
                )}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>

      {/* <pre style={{ fontSize: 10 }}>{JSON.stringify(orders, null, 4)}</pre> */}

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button type="button" variant="outlined" onClick={goProducts}>
            Agregar productos
          </Button>
          <Button type="button" variant="contained" color="success" onClick={goCart}>
            Mi carrito
          </Button>
        </Box>
    </Box>
  );
};

export default MyOrders;
