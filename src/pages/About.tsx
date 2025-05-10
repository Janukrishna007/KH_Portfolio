import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import theme from '../theme';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// (Reuse styled components from Home.tsx here, or import them if modularized)
// ... (copy styled components as needed) ...

const About = () => {
  const location = useLocation();
  return (
    <HomeContainer>
      <Header>
        <Logo>KH ARJUN</Logo>
        <NavWrapper>
          <Nav>
            <NavLink as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</NavLink>
            <NavLink as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</NavLink>
            <NavLink>WORKS</NavLink>
            <NavLink>CONTACT</NavLink>
          </Nav>
        </NavWrapper>
        <PokeballImg src="/images/icons/images.jpg" alt="Pokeball" />
      </Header>
      {/* Main About page content goes here, matching your screenshot layout */}
      {/* ... Pixel avatar, info, experience cards, volunteering cards, Victory Log, contact, footer ... */}
    </HomeContainer>
  );
};

export default About; 