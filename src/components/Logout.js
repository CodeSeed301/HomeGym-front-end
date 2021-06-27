import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated && <Button  variant="outline-warning" onClick={() => logout({ returnTo: window.location.origin })}>LogOut </Button>;
};

export default LogoutButton;
