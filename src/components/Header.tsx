import React, { useContext } from "react";
import { Dropdown } from 'react-bootstrap'
import { auth } from "../firebase";
import { UserContext } from "../firebase/UserContext";
import logo from "../images/logo.png";
import logoWhite from "../images/logo-white.png";

interface Props {
  route: string;
}

const Header: React.FC<Props> = ({ route }) => {
  // Grab the user from the UserContext
  const user = useContext(UserContext) as any;

  // Get current logo (based on route)
  const currentLogo = route === "login" ? logo : logoWhite;


  return (
    <header className={`header ${route !== "login" ? "has-bg" : ""}`}>
      <img className="logo" src={currentLogo} alt="logo" />
      {user ? 
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-toggle">
          <i className="fas fa-user-cog"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight>
          <Dropdown.Item href="#/action-1" onClick={()=>{
            auth.doSignOut();
          }}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> : null}
    </header>
  );
};

export default Header;
