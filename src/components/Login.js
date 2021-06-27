import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && <Button variant="outline-warning" onClick={() => loginWithRedirect()}> LogIn </Button>;
};

export default LoginButton;
