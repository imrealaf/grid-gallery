import React from "react";
import logo from "../images/logo.png";
import logoWhite from "../images/logo-white.png";

interface Props {
  route: string;
}

const Header: React.FC<Props> = ({ route }) => {
  const currentLogo = route === "login" ? logo : logoWhite;
  return (
    <header className={`header ${route !== "login" ? "has-bg" : ""}`}>
      <img className="logo" src={currentLogo} alt="logo" />
    </header>
  );
};

export default Header;
