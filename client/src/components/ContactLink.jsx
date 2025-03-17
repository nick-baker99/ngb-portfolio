import styled from "styled-components"

const ContactLink = ({ link, text = '', icon, target = '_self' }) => {
  return (
    <ContactLinkStyles href={link} target={target} className="icon-link">
      {icon}
      {text}
    </ContactLinkStyles>
  );
}

const ContactLinkStyles = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--darkGrey);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-bottom: 0.75rem;
  width: fit-content;
  &:hover {
    color: var(--mainBlue);
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export default ContactLink