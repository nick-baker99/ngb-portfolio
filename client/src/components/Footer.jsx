import styled from "styled-components"
import ContactLink from "./ContactLink";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyles>
      <img src="images/ngb_logo_alt.png" alt="NGB logo alt" />
      <div className="icon-links">
        <ContactLink
          link="https://www.linkedin.com/in/nick-baker-7b958b198"
          icon={<FaLinkedin />}
          target="_blank"
        />
        <ContactLink
          link="https://github.com/nick-baker99"
          icon={<FaGithub />}
          target="_blank"
        />
        <ContactLink
          link="mailto:ngbaker99@gmail.com"
          icon={<FaEnvelope />}
        />
      </div>
      <p className="copyright">© 2025 Nick Baker. All rights reserved</p>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  
`;

export default Footer