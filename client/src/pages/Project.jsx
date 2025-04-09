import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageNotFound from './PageNotFound';
import projectData from "../data/projects";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCode, FaLaptop } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";

const Project = () => {
  const { name } = useParams();

  const project = projectData.find(item => item.slug === name);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <ProjectStyles>
      <Link to="/projects" className="back-btn" aria-label="return to projects">
        <IoMdArrowRoundBack />&nbsp;Projects
      </Link>
      <h1 className="title">{project.title}</h1>
      <h2 className="title">Overview</h2>
      <p className="description">{project.description}</p>
      <h2 className="title">Tech Stack</h2>
      <div className="tech-stack">
        {project?.icons.map((item, i) => (
          <div className="tech" key={i}>{item}</div>
        ))}
      </div>
      <div className="links">
        <h2>Links</h2>
        <div className="buttons">
          {project?.links?.gitHub && (
            <a href={project.links.gitHub} title="GitHub repository" target="_blank">
              <FaCode />Code
            </a>
          )}
          {project?.links?.demo && (
            <a href={project.links.demo} title="Live demo" target="_blank">
            <RiComputerLine />Demo
          </a>
          )}
        </div>
      </div>
    </ProjectStyles>
  )
}

const ProjectStyles = styled.div`
  flex: 1;
  max-width: var(--pageMaxWidth);
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;

  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
    width: fit-content;

    &:hover {
      color: var(--subTxtColour);
    }
  }

  h1.title {
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--txtColour);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .tech-stack {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .tech-stack .tech {
    font-size: 1.1rem;
    padding: 10px 15px;
    background-color: var(--secondaryBg);
    border-radius: 8px; 
    font-weight: 600;
  }

  .links .buttons {
    display: flex;
    gap: 1rem;
  }

  .links a {
    background: var(--buttonBg);
    color: var(--buttonColour);
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    transition: background 0.3s ease;

    &:hover {
      background: var(--buttonHoverBg);
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

export default Project