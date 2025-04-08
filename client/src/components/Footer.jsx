import styled from "styled-components"
import ContactLink from "./ContactLink";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const logoImg = theme === "dark"
    ? "ngb_logo_alt.png"
    : "ngb-logo.png";

  return (
    <FooterStyles>
      <div className="inner">
        <div className="footer-logo">
          <Link to="/">
            <img src={`../images/${logoImg}`} alt="NGB logo alt" />
          </Link>
        </div>
        <div className="icon-links">
          <ContactLink
            link="https://www.linkedin.com/in/nick-baker-7b958b198"
            icon={<FaLinkedin />}
            target="_blank"
            title="Linkedin"
          />
          <ContactLink
            link="https://github.com/nick-baker99"
            icon={<FaGithub />}
            target="_blank"
            title="GitHub"
          />
          <ContactLink
            link="mailto:ngbaker99@gmail.com"
            icon={<FaEnvelope />}
            title="Send email"
          />
        </div>
        <p className="copyright">© 2025 Nick Baker. All rights reserved</p>
      </div>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  background: var(--footerBg);
  .inner {
    max-width: var(--pageMaxWidth);
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
  }

  .footer-logo,
  .copyright {
    flex-grow: 1;
    flex-basis: 0;
  }
  .footer-logo img {
    transition: transform 0.3s ease;
    width: 120px;

    &:hover {
      transform: scale(1.1);
    }
  }

  .icon-links {
    display: flex;
    gap: 1rem;
  }
  .icon-link { 
    color: var(--txtColour);
    margin: 0; 
  }

  .copyright { 
    color: var(--txtColour);
    text-align: right;
  }

  @media (max-width: 768px) {
    .inner { 
      flex-direction: column; 
      padding: 1rem;
    }
    .copyright { text-align: center; }
  }
`;

export default Footer