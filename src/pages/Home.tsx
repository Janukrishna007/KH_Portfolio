import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import theme from '../theme';
import { useLocation } from 'react-router-dom';
import { HomeContainer, Header, Logo, NavWrapper, Nav, NavLink, PokeballImg } from '../components/shared/StyledComponents';
import { useState } from 'react';

const HeroSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 3rem 0 2rem 0;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 520px;
  margin-top: 0;
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-family: 'PokemonFireRed', sans-serif;
  font-size: 2.7rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: left;
  width: 100%;
  max-width: none;
`;

const HeroSubtitle = styled.p`
  font-size: 1.08rem;
  color: #222;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  margin-bottom: 2.1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: none;
`;

const ResumeButtonAndGifRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 0.7rem;
  position: relative;
`;

const CustomImageButton = styled.a`
  display: inline-block;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  border-radius: 48px;
  overflow: hidden;
  box-shadow: 0 2px 16px #4ade8033;
  transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
  padding: 0;
  margin: 0;
  &:focus, &:active {
    outline: none;
    box-shadow: 0 0 0 3px #4ade80cc, 0 2px 16px #4ade8033;
    filter: brightness(1.04) drop-shadow(0 0 8px #4ade8088);
    transform: scale(0.98);
  }
  img {
    display: block;
    width: 320px;
    height: auto;
    border: none;
    border-radius: 48px;
    transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
    background: transparent;
    margin: 0;
    padding: 0;
  }
`;

const ResumeNote = styled.p`
  font-size: 1.02rem;
  color: #111;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  margin-top: 0.7rem;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 540px;
  height: 540px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 900px) {
    width: 320px;
    height: 320px;
  }
`;

const HeroProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
  box-shadow: none;
`;

const SocialLogo = styled.img`
  height: 32px;
  opacity: 0.7;
`;

const AboutSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    padding: 0 1rem;
    max-width: 100%;
  }
`;

const AboutText = styled.p`
  font-size: 1.15rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 1.05rem;
    padding: 0 0.5rem;
    line-height: 1.6;
    margin-bottom: 0.7rem;
  }
`;

const galleryImages = [
  '/images/gallery/Rectangle 43.png',
  '/images/gallery/Rectangle 44.png',
  '/images/gallery/Rectangle 45.png',
  '/images/gallery/Rectangle 49.png',
  '/images/gallery/Rectangle 50.png',
];

const GalleryRow = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: flex-end;
  background: rgba(245, 245, 245, 0.5);
  border-radius: 32px;
  padding: 2rem 0;
`;

const GalleryImg = styled.img<{ objectPosition?: string }>`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  background: #fff;
  border: 2px solid #f0f0f0;
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s;
  margin: 0;
  object-position: ${props => props.objectPosition || 'center'};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin: 2.5rem 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  font-family: 'PokemonFireRed', sans-serif;
  text-align: center;
`;

const PolaroidRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Polaroid = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  width: 340px;
  padding: 1.2rem 1.2rem 2rem 1.2rem;
  position: relative;
  border: 2.5px solid #bbb;
  transform: rotate(-12deg);
  &:nth-of-type(2) { transform: rotate(12deg); }
`;

const PolaroidImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.75rem;
`;

const PolaroidPinImg = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  pointer-events: none;
`;

const PolaroidCaption = styled.p`
  font-size: 0.98rem;
  color: #333;
  text-align: center;
`;

const DeckCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  width: 210px;
  padding: 1.2rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeckImg = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.7rem;
`;

const DeckTitle = styled.h3`
  font-size: 1.1rem;
  color: ${theme.colors.primary};
  font-family: 'PokemonFireRed', sans-serif;
  margin-bottom: 0.3rem;
`;

const DeckDesc = styled.p`
  font-size: 0.95rem;
  color: #333;
  text-align: center;
`;

const MoreWorksBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 2.5rem auto;
  position: relative;
  width: fit-content;
`;

const PikachuImg = styled.img`
  width: 80px;
  height: auto;
  position: absolute;
  left: 0;
  top: -20px;
  z-index: 10;
  filter: drop-shadow(0 18px 18px rgba(0,0,0,0.25));
`;

const MoreWorksBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #b8000f 0%, #e30613 100%);
  border: none;
  border-radius: 30px;
  padding: 0.3rem 3.5rem 0.5rem 3.5rem;
  box-shadow: 0 2px 8px rgba(227, 6, 19, 0.12);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  min-width: 260px;
  min-height: 48px;
  position: relative;
  margin-top: 40px;
`;

const MoreWorksText = styled.span`
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 1.1rem;
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
  margin: 0.2rem 0;
`;

const PikachuNote = styled.div`
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 1.3rem;
  color: #111;
  text-align: center;
  margin-top: 0.3rem;
  margin-bottom: 0;
`;

const MarqueeRow = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 2rem 0 3.5rem 0;
  background: transparent;
`;

const MarqueeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  animation: marquee 16s linear infinite;
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const GifPreview = styled.img`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 120px;
  object-fit: contain;
  z-index: 3;
  pointer-events: none;
`;


const logoFiles = [
  '/images/logos/Svas.pro.png',
  '/images/logos/Mask group.png',
  '/images/logos/Mask group-1.png',
  '/images/logos/Mask group-2.png',
  '/images/logos/Mask group-3.png',
  '/images/logos/Group 217.png',
  '/images/logos/Group 482032.png',
  '/images/logos/Group 482033.png',
];

const DesignDeckSectionTitle = styled(SectionTitle)`
  justify-content: center !important;
  gap: 0.7rem !important;
  font-size: 3rem !important;
  margin-bottom: 2.5rem;
`;

const FullWidthDesignDeckRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 4rem;
  width: 100vw;
  max-width: 1800px;
  margin: 0 auto 2.5rem auto;
  padding: 0 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 0 0.5rem;
  }
`;

const LargeDeckCard = styled(DeckCard)`
  width: 500px;
  min-height: 600px;
  padding: 2.5rem 2rem 3rem 2rem;
  box-shadow: 0 12px 48px rgba(0,0,0,0.12);
  @media (max-width: 900px) {
    width: 95vw;
    min-width: 0;
    max-width: 420px;
    min-height: 400px;
    padding: 1.2rem 0.7rem 2rem 0.7rem;
  }
`;

const LargeDeckImg = styled(DeckImg)`
  height: 320px;
  border-radius: 22px;
  margin-bottom: 1.5rem;
`;


const ContactSection = styled.section`
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 2rem 2rem 2rem;
  min-height: 480px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
    gap: 2rem;
    align-items: center;
  }
`;

const ContactLeft = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.2rem;
`;

const ContactHeading = styled.h2`
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 2.7rem;
  color: #111;
  margin-bottom: 0.7rem;
`;

const ContactSub = styled.p`
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 1.35rem;
  color: #222;
  margin-bottom: 0.7rem;
  max-width: 600px;
`;

const ContactBtnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokeIcon = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  top: -18px;
  right: -18px;
  left: auto;
  transform: none;
  z-index: 10;
  filter: drop-shadow(0 8px 8px rgba(0,0,0,0.18));
  @media (max-width: 700px) {
    width: 28px;
    height: 28px;
    top: -12px;
    right: 8px;
  }
`;

const ContactButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.3rem 2.2rem;
`;

const ContactBtn = styled.a`
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
  transition: background 0.18s, transform 0.15s, box-shadow 0.15s;
  min-width: 220px;
  min-height: 48px;
  margin-top: 18px;
  position: relative;
  z-index: 1;
`;
const GmailBtn = styled(ContactBtn)`
  background: #ef473a;
  color: #fff;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
`;
const WhatsappBtn = styled(ContactBtn)`
  background: #36d86b;
  color: #fff;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
`;
const LinkedInBtn = styled(ContactBtn)`
  background: #0a7cc7;
  color: #fff;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
`;
const InstagramBtn = styled(ContactBtn)`
  background: #f76ee6;
  color: #fff;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
`;
const ContactRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;
const PixelAvatar = styled.img`
  width: 520px;
  height: auto;
  image-rendering: pixelated;
  align-self: flex-end;
`;


const PixelFooter = styled.footer`
  width: 100vw;
  background: #e30613;
  color: #fff;
  font-family: 'PokemonFireRed', 'Press Start 2P', monospace;
  font-size: 1.1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.2rem 2.5rem 0.7rem 2.5rem;
  position: relative;
  margin-top: 0;
  z-index: 10;
  min-height: 90px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 1rem 1.2rem 1rem;
    font-size: 1rem;
  }
`;
const PixelFooterRight = styled.div`
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
  @media (max-width: 700px) {
    position: static;
    border-radius: 0 0 24px 24px;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    box-shadow: none;
    width: 100%;
    justify-content: flex-start;
  }
`;


const fadeSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const stagger = {
  visible: { transition: { staggerChildren: 0.18 } }
};


const HamburgerIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    height: 4px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    margin: 3px 0;
    transition: 0.3s;
  }
  &.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
`;


const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  z-index: 200;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100vw;
    background: rgba(208,2,35,0.98);
    z-index: 150;
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
    padding: 1.5rem 0 2rem 0;
    gap: 2rem;
    align-items: center;
    animation: fadeInMenu 0.3s;
  }
  @keyframes fadeInMenu {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ResponsiveNavWrapper = styled(NavWrapper)`
  @media (max-width: 900px) {
    display: none;
  }
`;

const Home = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HomeContainer>
      <Header>
        <Logo>KH ARJUN</Logo>
        <ResponsiveNavWrapper>
          <Nav>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</NavLink>
            <NavLink to="#">WORKS</NavLink>
            <NavLink to="#">CONTACT</NavLink>
          </Nav>
        </ResponsiveNavWrapper>
        <Hamburger aria-label="Open menu" onClick={() => setMenuOpen(m => !m)}>
          <HamburgerIcon className={menuOpen ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerIcon>
        </Hamburger>
        {menuOpen && (
          <MobileNav>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
            <NavLink to="#" onClick={() => setMenuOpen(false)}>WORKS</NavLink>
            <NavLink to="#" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
          </MobileNav>
        )}
        <PokeballImg src="/images/icons/images.jpg" alt="Pokeball" />
      </Header>
      <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <HeroSection>
          <HeroContent>
            <HeroText>
              <HeroTitle>
                <span style={{ whiteSpace: 'nowrap' }}>Designing Impactful Brands,</span><br />
                <span style={{ whiteSpace: 'nowrap' }}>Digital Products & Experiences</span>
              </HeroTitle>
              <HeroSubtitle>
                Crafting user-focused digital experiences through creative design and strategy. Blending branding, UI/UX, and social media—powered by Figma and a passion for impact.
              </HeroSubtitle>
              <ResumeButtonAndGifRow>
                <CustomImageButton href="#" download>
                  <img src="/images/buttons/button.png" alt="Download my Resume" />
                </CustomImageButton>
                <GifPreview src="/images/gifs/mygif.gif" alt="GIF Preview" />
              </ResumeButtonAndGifRow>
              <ResumeNote>before Smeargle gets too creative with the button!</ResumeNote>
            </HeroText>
            <HeroImageWrapper>
              <HeroProfileImg src="/images/hero/hero.png" alt="Profile" />
            </HeroImageWrapper>
          </HeroContent>
        </HeroSection>
      </motion.section>
      <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <MarqueeRow>
          <MarqueeContent style={{ minWidth: '200vw' }}>
            {logoFiles.concat(logoFiles).map((src, idx) => (
              <SocialLogo src={src} alt={`Logo${idx + 1}`} key={idx} />
            ))}
          </MarqueeContent>
        </MarqueeRow>
      </motion.div>
      <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <AboutSection>
          <AboutText className="pokemon-heading">
            I'm K H Arjun, and I design digital experiences that are both impactful and intuitive. I focus on blending creativity with strategy to craft clean, user-centered designs that solve real problems and elevate brands. My goal is to create meaningful experiences that connect with users and drive results.
          </AboutText>
        </AboutSection>
      </motion.section>
      <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={fadeSlideUp}>
          <GalleryRow>
            {galleryImages.map((src, idx) => (
              <GalleryImg
                key={src}
                src={src}
                alt={`Gallery${idx + 1}`}
                style={{
                  marginTop: idx % 2 === 0 ? '0' : '40px',
                  transform: `rotate(${idx % 2 === 0 ? -6 : 6}deg)`,
                }}
                objectPosition={idx === 2 ? '100% center' : undefined}
              />
            ))}
          </GalleryRow>
        </motion.div>
      </motion.section>
      <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <SectionTitle style={{ justifyContent: 'center', gap: '0.5rem', fontSize: '2.5rem' }}>
          <img src="/images/hero/victini.gif" alt="Victini" style={{ height: '80px', marginRight: '0.1rem', verticalAlign: 'middle' }} />
          <span style={{ fontFamily: 'PokemonFireRed, sans-serif', color: '#E30613', fontWeight: 400 }}>Victory Log</span>
        </SectionTitle>
        <motion.div variants={stagger}>
          <PolaroidRow>
            <Polaroid>
              <PolaroidPinImg src="/images/pins/pin1.png" alt="Pin" />
              <PolaroidImg src="/images/victory/ANS00859 (1) 1.png" alt="Victory1" />
              <PolaroidCaption>Recognized as the 4th Top Student of 2024 in µLearn's Discord Server, awarded by Hon. Finance Minister of Kerala, Shri. K N Balagopal.</PolaroidCaption>
            </Polaroid>
            <Polaroid>
              <PolaroidPinImg src="/images/pins/pin1.png" alt="Pin" />
              <PolaroidImg src="/images/victory/ANS00859 (1) 2.png" alt="Victory2" />
              <PolaroidCaption>Conducted a workshop titled "Beyond Pixels" to introduce students to the design thinking process and Figma fundamentals in graphic design.</PolaroidCaption>
            </Polaroid>
          </PolaroidRow>
        </motion.div>
      </motion.section>
      <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <DesignDeckSectionTitle>
          <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            Design Deck
            <img src="/images/hero/mrmime.gif" alt="Mr. Mime" style={{ height: '80px', marginLeft: '18px', verticalAlign: 'middle' }} />
          </span>
        </DesignDeckSectionTitle>
        <motion.div variants={stagger}>
          <FullWidthDesignDeckRow>
            <LargeDeckCard>
              <LargeDeckImg src="/images/products/Rectangle 51.png" alt="Product1" />
              <DeckTitle>Fruigo: Fruit Roll-ups</DeckTitle>
              <DeckDesc>Branded "Fruigo" as part of my submission for KSUM's Huddle Branding Challenge 2.0, where participants were evaluated on their creative and strategic branding skills.</DeckDesc>
            </LargeDeckCard>
            <LargeDeckCard>
              <LargeDeckImg src="/images/products/Rectangle 52.png" alt="Product2" />
              <DeckTitle>Ad Campaign</DeckTitle>
              <DeckDesc>Designed a social media ad poster for Svas.pro, a platform connecting individuals with trusted therapists and supporting professionals in growing their practice—making mental well-being simple and accessible.</DeckDesc>
            </LargeDeckCard>
            <LargeDeckCard>
              <LargeDeckImg src="/images/products/Rectangle 53.png" alt="Product3" />
              <DeckTitle>Weeteg</DeckTitle>
              <DeckDesc>Branded "Weeteg" to reflect its mission of delivering hands-on, industry-focused learning, as part of a content and visual identity project.</DeckDesc>
            </LargeDeckCard>
          </FullWidthDesignDeckRow>
        </motion.div>
      </motion.section>
      <motion.div variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <MoreWorksBtnWrapper>
          <PikachuImg src="/images/gifs/pikachu.gif" alt="Pikachu" />
          <MoreWorksBtn href="#">
            <MoreWorksText>View more works</MoreWorksText>
          </MoreWorksBtn>
        </MoreWorksBtnWrapper>
        <PikachuNote>Pikachu believes in your good taste!</PikachuNote>
      </motion.div>
      <motion.section variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <ContactSection>
          <ContactLeft>
            <ContactHeading>Need designs that stand out?</ContactHeading>
            <ContactSub>I craft bold, purposeful visuals tailored to your goals. Let's connect and make something amazing.</ContactSub>
            <ContactButtonsGrid>
              <ContactBtnWrapper>
                <PokeIcon src="/images/gifs/charmander.gif" alt="Charmander" />
                <GmailBtn className="GmailBtn" href="mailto:kharjun48@gmail.com">
                  <span>Gmail</span>
                </GmailBtn>
              </ContactBtnWrapper>
              <ContactBtnWrapper>
                <PokeIcon src="/images/gifs/bulbasaur.gif" alt="Bulbasaur" />
                <WhatsappBtn className="WhatsappBtn" href="http://wa.me/8848043184" target="_blank" rel="noopener noreferrer">
                  <span>Whatsapp</span>
                </WhatsappBtn>
              </ContactBtnWrapper>
              <ContactBtnWrapper>
                <PokeIcon src="/images/gifs/squirtle.gif" alt="Squirtle" />
                <LinkedInBtn className="LinkedInBtn" href="http://linkedin.com/in/kharjun" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                </LinkedInBtn>
              </ContactBtnWrapper>
              <ContactBtnWrapper>
                <PokeIcon src="/images/gifs/mew.gif" alt="Mew" />
                <InstagramBtn className="InstagramBtn" href="https://www.instagram.com/a.rjunnn._/" target="_blank" rel="noopener noreferrer">
                  <span>Instagram</span>
                </InstagramBtn>
              </ContactBtnWrapper>
            </ContactButtonsGrid>
          </ContactLeft>
          <ContactRight>
            <PixelAvatar src="/images/hero/lego kh.png" alt="Pixel Avatar" />
          </ContactRight>
        </ContactSection>
      </motion.section>
      <motion.footer variants={fadeSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <PixelFooter>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', fontFamily: 'PokemonFireRed, monospace', fontSize: '1.1rem', lineHeight: 1.4 }}>
            <span>Pokémon sprites used on this site are for non-commercial, portfolio purposes only.</span>
            <span>Pokémon and all related assets are © Nintendo, Game Freak, and The Pokémon Company.</span>
          </div>
          <PixelFooterRight>
            Designed with <span style={{ color: '#FFD600', fontSize: '2.1rem', marginLeft: '0.3rem' }}>❤️</span>
          </PixelFooterRight>
        </PixelFooter>
      </motion.footer>
    </HomeContainer>
  );
};

export default Home; 