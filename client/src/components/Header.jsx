import { useContext, useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { IoMenu, IoClose } from "react-icons/io5";
import { AiFillMoon, AiFillSun } from "react-icons/ai";
import { ThemeContext } from '../context/ThemeContext';
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // toggle for mobile nav menu
  const [navOpen, setNavOpen] = useState(false);
  // tracks if current window size is mobile
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  const [hasShadow, setHasShadow] = useState(false);

  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    // add window resize event handler to update mobile size state
    const handleResize = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    window.addEventListener('resize', handleResize);

    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    // remove event handlers on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <HeaderStyles $hasShadow={hasShadow} $theme={theme}>
      <div className="inner">
        <div className="ngb-logo">
          <img src={`images/${theme === "light" ? "ngb-logo.png" : "ngb_logo_alt.png"}`} alt="NGB logo" />
        </div>
        {isMobile && navOpen && <div className="nav-backdrop" onClick={() => setNavOpen(false)} />}
        <div className={`nav-wrapper${isMobile && navOpen ? ' open' : ''}`}>
          <nav>
            <ul>
              <li><ScrollLink to="home-section" smooth>Home</ScrollLink></li>
              <li><ScrollLink to="about-section" smooth>About</ScrollLink></li>
              <li><a href="#">Projects</a></li>
              <li><ScrollLink to="contact-section" smooth>Contact</ScrollLink></li>
            </ul>
          </nav>
          <button className="contact-btn">Get in touch</button>
          {/* toggle theme button */}
          <ToggleButton $theme={theme} onClick={toggleTheme} aria-label="switch theme">
            {theme === "light" ? <AiFillMoon /> : <AiFillSun />}
          </ToggleButton>
          { // mobile nav menu close button
          isMobile && navOpen && (
            <button 
              type="button" 
              title="close menu"
              className="menu-btn close"
              onClick={() => setNavOpen(false)}
            >
              <IoClose />
            </button>
          )}
        </div>
        { // mobile nav menu open button
        isMobile && !navOpen && (
          <button 
            type="button" 
            title="open menu" 
            className="menu-btn open"
            onClick={() => setNavOpen(true)}
          >
            <IoMenu />
          </button>
        )}
      </div>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  display: flex;
  position: fixed; /* Keeps it visible when scrolling */
  top: 0;
  left: 0;
  width: 100%;
  background: var(--mainBg);
  height: var(--headerHeight);
  z-index: 1000;
  box-shadow: ${({ $hasShadow }) => ($hasShadow ? 'var(--headerShadow)' : 'none')};
  transition: box-shadow 0.3s ease-in-out;
  .inner {
    max-width: var(--pageMaxWidth);
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Logo Styling */
  .ngb-logo {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
  }
  .ngb-logo img {
    width: 120px; 
    transition: transform 0.3s ease;
  }
  .ngb-logo:hover img {
    transform: scale(1.1);
  }

  /* Navigation Styling */
  .nav-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  nav ul {
    display: flex;
    gap: 1.5rem;
  }
  nav ul li {
    list-style: none;
  }
  nav ul li a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--txtColour);
    transition: color 0.3s ease;
  }
  nav ul li a:hover {
    color: var(--subTxtColour); /* Subtle color change */
  }

  .contact-btn {
    padding: 10px 20px;
    font-size: 1.1rem;
    font-weight: 600;
    background: var(--buttonBg);
    color: white;
    border: none;
    border-radius: 6px;
    transition: background 0.3s ease;
    margin-left: 0.5rem;
  }
  .contact-btn:hover {
    background: var(--buttonHoverBg);
  }
  /* Hide the Mobile Menu Button */
  .menu-btn {
    display: none;
  }
  
  @media only screen and (max-width: 768px) {
    .nav-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${({ $theme }) => ($theme === "light"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(43, 54, 64, 0.7)"
      )};
      backdrop-filter: blur(8px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      transform: translateY(-100%);
      transition: transform 0.4s ease-in-out;
      z-index: 100;
    }
    .nav-wrapper.open {
      transform: translateY(0);
    }
    nav ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
    }
    nav ul li a {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--subTxtColour);
      transition: color 0.3s ease;
    }
    nav ul li a:hover {
      color: var(--buttonHoverBg);
    }
    .contact-btn {
      font-size: 1.2rem;
      padding: 12px 20px;
      border-radius: 8px;
      background-color: var(--subTxtColour);
      color: white;
      margin: 0;
    }
    .menu-btn {
      display: inline-block;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 20px;
      right: 20px;
      background: transparent;
      border: none;
      color: var(--subTxtColour);
      font-size: 2rem;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const ToggleButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  background: ${({ $theme }) => ($theme === "light" ? "#e9e9e9" : "#3d4d5c")};
  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ $theme }) => ($theme === "light" ? "#2B3640" : "#FFF")};
  }

  @media (max-width: 768px) {
    width: 50px;
    heighT: 50px;
  }
`;

export default Header