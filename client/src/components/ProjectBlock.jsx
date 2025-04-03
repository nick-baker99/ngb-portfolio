import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaPhp, FaFigma  } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const iconsList = {
  "mongo": <SiMongodb style={{ fill: "#00684a" }} title="Mongo DB" />,
  "node": <FaNodeJs style={{ fill: "#3c873a" }} title="Node JS" />,
  "react": <FaReact style={{ fill: "#61dbfb" }} title="React" />,
  "php": <FaPhp style={{ fill: "#4f5b93" }} title="PHP" />,
  "mysql": <SiMysql style={{ fill: "#00758f" }} title="MySQL" />,
  "figma": <FaFigma style={{ fill: "#f24e1e" }} title="Figma" />
}

const ProjectBlock = ({ title, description, image, link, icons = [] }) => {
  return (
    <BlockStyles className="block">
      <img 
        loading="lazy" 
        src={`images/projects/${image}`} 
        alt={`${title} preview`} 
      />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="description">{description}</p>
        <div className="project-link">
          <Link to={link} aria-label={`View details for ${title}`}>View Project</Link>
          <div className="project-icons">
            {icons.map((item, i) => (
              <div key={i} className="icon">{iconsList[item]}</div>
            ))}
          </div>
        </div>
      </div>
    </BlockStyles>
  )
}

const BlockStyles = styled.div`
  background-color: var(--secondaryBg);
  border-radius: 5px;
  overflow: hidden;
  text-align: left;
  box-shadow: var(--boxShadow);
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .project-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    @media (max-width: 1200px) {
      padding: 1rem;
    }
  }
  .project-title {
    margin-bottom: 1rem;
    color: var(--titleColour);
    font-size: 1rem;
  }
  .description {
    font-size: 0.9rem;
    line-height: 1.5em;
    margin-bottom: 1.5rem;
  }
  .project-link {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .project-link a {
    display: inline-block;
    background: var(--buttonBg);
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    padding: 8px 12px;
    font-size: 0.9rem;
    transition: transform 0.3s ease-in-out;
  }
  .project-link a:hover {
    background: var(--buttonHoverBg);
    transform: scale(1.05);
  }
  .project-icons {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default ProjectBlock