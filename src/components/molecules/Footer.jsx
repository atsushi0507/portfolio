import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <FooterContainer>
        <FooterContent>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavLinks>
          <Copyright>&copy; 2024 Atsushi Mizukami. All rights reserved.</Copyright>
          <p>
            <ExternalLink href="https://github.com/atsushi0507" target="_blank" rel="noopener noreferrer">GitHub</ExternalLink> | 
            <NavLink to="/privacy-policy">Privacy Policy</NavLink> | 
            <NavLink to="/terms-of-service">Terms of Service</NavLink>
          </p>
          <p>Design and Development by Atsushi Mizukami</p>
        </FooterContent>
      </FooterContainer>
    );
  };
  
  export default Footer;


const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin: 10px 0;
`;

const ExternalLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;