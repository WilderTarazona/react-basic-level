import { Step, StepLabel, Stepper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import useShoppingCart from "../../../core/store/shopping-cart/useShoppingCart";

const ShoppingCartLayout = () => {
  const { activeStepIndex } = useShoppingCart(0);

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "auto",
        pt: "2rem",
      }}
    >
      <Stepper activeStep={activeStepIndex}>
        <Step>
          <StepLabel>Paso 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Paso 2</StepLabel>
        </Step>
      </Stepper>

      <Box
        sx={{
          maxWidth: "95%",
          margin: "auto",
          pt: "3rem",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ShoppingCartLayout;
