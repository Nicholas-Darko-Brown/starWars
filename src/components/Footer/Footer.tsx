import React from "react";
import "./styles"
import Logo from "../../assets/star-wars-logo.png";
import { FooterContainer } from "./styles";

const Footer = () => {

  const currentYear = new Date().getFullYear();


  return (
    <FooterContainer>
      <div className="footer-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="copyright-text">
        <span className="copyright">&copy; copyright {currentYear}  </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
