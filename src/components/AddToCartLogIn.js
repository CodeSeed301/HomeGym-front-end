import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const AddToCartLogIn = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        variant="warning"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        🛒 Login to ADD TO CART
      </Button>
    )
  );
};

export default AddToCartLogIn;
