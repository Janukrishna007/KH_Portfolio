import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  overflow-x: hidden;
`;

export const Header = styled.header`
  width: 100vw;
  height: 100px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background-color: #d00223;
  position: relative;
  border-bottom: 6px solid #000;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  z-index: 10;
`;

export const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  font-family: 'PokemonFireRed', sans-serif;
  letter-spacing: 2px;
  margin-right: 2rem;
`;

export const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: 'PokemonFireRed', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0.5rem 2.2rem;
  border-radius: 2rem;
  background: transparent;
  border: 2px solid transparent;
  transition: background 0.2s, color 0.2s, border 0.2s, transform 0.15s;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background: #fff;
    color: #d00223;
    border: 2px solid #d00223;
    transform: scale(1.07);
    font-weight: bold;
  }
  &.active {
    background: #900000;
    color: #fff;
    font-weight: bold;
    border: 2px solid #900000;
  }
`;

export const PokeballImg = styled.img`
  position: absolute;
  right: 2.2rem;
  bottom: -40px;
  width: 120px;
  height: 120px;
  z-index: 100;
  background: none;
  pointer-events: none;
  border: none;
  filter: none;
`; 