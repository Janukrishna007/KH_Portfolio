import { useLocation } from 'react-router-dom';
import { HomeContainer, Header, Logo, NavWrapper, Nav, NavLink, PokeballImg } from '../components/shared/StyledComponents';

const About = () => {
  const location = useLocation();
  
  return (
    <HomeContainer>
      <Header>
        <Logo>KH ARJUN</Logo>
        <NavWrapper>
          <Nav>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</NavLink>
            <NavLink to="#">WORKS</NavLink>
            <NavLink to="#">CONTACT</NavLink>
          </Nav>
        </NavWrapper>
        <PokeballImg src="/images/icons/images.jpg" alt="Pokeball" />
      </Header>
      
    </HomeContainer>
  );
};

export default About; 