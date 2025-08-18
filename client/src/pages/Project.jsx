import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageNotFound from './PageNotFound';
import projectData from "../data/projects";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import * as detailComponents from "../components/projectDetails/detailComponents";
import { useEffect } from 'react';

const Project = () => {
  const { name } = useParams();

  const project = projectData.find(item => item.slug === name);
  const DetailComponent = detailComponents[project?.featureComponent];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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
        <h2 className="title">Links</h2>
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
      {DetailComponent && <DetailComponent />}
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
    color: var(--titleColour);

    &:hover {
      color: var(--subTxtColour);
    }
  }

  h1.title {
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--titleColour);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.4rem;
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
    flex-wrap: wrap;
  }

  .tech-stack .tech {
    font-size: 1rem;
    padding: 8px 14px;
    background-color: #d9d9d9;
    border-radius: 8px; 
    color: #222;
    font-weight: 600;
  }

  .links { margin-bottom: 1rem; }

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

  .project-details img {
    margin-bottom: 1rem;
    border: 1px solid #ccc;
  }

  @media only screen and (max-width: 992px) {
    h1.title {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    .description {
      font-size: 0.9rem;
    }
    .tech-stack .tech {
      font-size: 0.9rem;
      padding: 6px 12px;
    }
    .links a {
      font-size: 0.9rem;
      padding: 6px 10px;
    }
    .links .buttons {
      gap: 0.5rem;
    }
  }
`;

export default Project