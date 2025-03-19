import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const SkillBlock = ({ title, image }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BlockStyles className="skill-block" tabIndex="0">
      <img 
        loading="lazy" 
        src={`images/skills/${image}`} 
        alt={`${title} icon`} 
      />
      {title}
    </BlockStyles>
  )
}

const BlockStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: var(--mainBg);
  box-shadow: ${({ $theme }) => $theme === "light" 
    ? "0 0 3px rgba(0,0,0,0.3)" 
    : "0 4px 10px rgba(173, 216, 230, 0.1)"
  };
  padding: 0.75rem 1rem;
  font-weight: 500;
  font-size: 0.8rem;
  border-radius: 5px;
  transition: transform 0.3s ease;
  outline: none;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    max-width: 50px;
  }
`;

export default SkillBlock