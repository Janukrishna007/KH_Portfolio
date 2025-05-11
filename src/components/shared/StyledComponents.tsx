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
  padding-right: 0;
  display: flex;
  align-items: center;
  background-color: #d00223;
  position: relative;
  border-bottom: 6px solid #000;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  z-index: 10;
  justify-content: space-between;
  @media (max-width: 700px) {
    height: 80px;
  }
`;

export const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  font-family: 'PokemonFireRed', sans-serif;
  letter-spacing: 2px;
  margin-right: 2rem;
  transition: color 0.18s, transform 0.18s, text-shadow 0.18s;
  cursor: pointer;
  &:hover {
    color: #fff;
    transform: scale(1.06) rotate(-2deg);
    text-shadow: none;
  }
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
  transition: background 0.2s, color 0.2s, border 0.2s, transform 0.15s, box-shadow 0.18s, text-shadow 0.18s;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:hover {
    background: #fff;
    color: #d00223;
    border: 2px solid #d00223;
    transform: scale(1.09) rotate(-2deg);
    font-weight: bold;
    box-shadow: 0 2px 16px #d0022340;
    text-shadow: 0 2px 8px #d0022340;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 30%;
    right: 30%;
    bottom: 8px;
    height: 3px;
    background: #FFD600;
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.18s, left 0.18s, right 0.18s;
  }
  &:hover::after {
    left: 10%;
    right: 10%;
    opacity: 1;
  }
  &.active {
    background: #900000;
    color: #fff;
    font-weight: bold;
    border: 2px solid #900000;
    box-shadow: 0 2px 16px #90000040;
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
  @media (max-width: 1200px) {
    right: 0.5rem;
    width: 90px;
    height: 90px;
    bottom: -30px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const PixelFooter = styled.footer`
  width: 100vw;
  background: linear-gradient(90deg, #e30613 80%, #ff4e50 100%);
  color: #fff;
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 1.15rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem 2rem 1.2rem 2rem;
  position: relative;
  margin-top: 0;
  z-index: 10;
  min-height: 110px;
  border-radius: 18px 18px 0 0;
  box-shadow: 0 -2px 16px rgba(0,0,0,0.10);
  line-height: 1.7;
  letter-spacing: 0.02em;
  transition: box-shadow 0.18s, transform 0.18s;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem 1.5rem 1rem;
    font-size: 1rem;
    text-align: center;
    border-radius: 16px 16px 0 0;
  }
  &:hover {
    box-shadow: 0 -6px 32px #FFD60055, 0 -2px 16px rgba(0,0,0,0.10);
    transform: translateY(-4px) scale(1.01);
  }
`;

export const PixelFooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #e30613;
  padding: 1.2rem 3.5rem 1.2rem 2.5rem;
  border-radius: 0 0 0 48px;
  position: absolute;
  right: 0;
  top: -48px;
  font-size: 1.5rem;
  box-shadow: -8px 8px 0 0 #e30613;
  transition: box-shadow 0.18s, transform 0.18s;
  @media (max-width: 900px) {
    position: static;
    border-radius: 0 0 24px 24px;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    box-shadow: none;
    width: 100%;
    justify-content: flex-start;
  }
  &:hover {
    box-shadow: 0 0 24px #FFD60088, -8px 8px 0 0 #e30613;
    animation: pulse 0.7s;
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
`;

export const ContactBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  border-radius: 2.2rem;
  padding: 0.4rem 3.2rem 0.4rem 3.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
  min-width: 220px;
  min-height: 48px;
  margin-top: 18px;
  position: relative;
  z-index: 1;
  color: #fff;
  &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const GmailBtn = styled(ContactBtn)`
  background: #ef473a;
  color: #fff;
`;
export const WhatsappBtn = styled(ContactBtn)`
  background: #36d86b;
  color: #fff;
`;
export const LinkedInBtn = styled(ContactBtn)`
  background: #0a7cc7;
  color: #fff;
`;
export const InstagramBtn = styled(ContactBtn)`
  background: #f76ee6;
  color: #fff;
`; 