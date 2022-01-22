import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";

import "./NavLinks.css";

const NavLinks = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/all-places">ALL PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/users">ALL USERS</NavLink>
      </li>
      <li>
        {authCtx.isLoggedIn && (
          <NavLink to={`${authCtx.userId}/places`}>MY PLACES</NavLink>
        )}
      </li>
      <li>
        {authCtx.isLoggedIn && <NavLink to="/places/new">ADD PLACE</NavLink>}
      </li>
      <li>
        {!authCtx.isLoggedIn && <NavLink to="/auth">AUTHENTICATE</NavLink>}
        {authCtx.isLoggedIn && (
          <Button
            onClick={() => {
              authCtx.logout();
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        )}
      </li>
    </ul>
  );
};

export default NavLinks;
