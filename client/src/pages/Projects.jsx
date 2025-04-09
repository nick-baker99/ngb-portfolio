import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ProjectBlock from "../components/ProjectBlock";
import projectData from "../data/projects";

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = "Nick Baker - Projects";
  }, []);
  
  return (
    <ProjectsStyles>
      <h1 className="title">My Projects</h1>
      <p className="sub-text">A selection of apps and tools I've built using modern tech stacks.</p>
      <div className="projects">
        {projectData.map((item, i) => (
          <ProjectBlock
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            link={`/projects/${item.slug}`}
            icons={item.icons}
          />
        ))}
      </div>
    </ProjectsStyles>
  )
}

const ProjectsStyles = styled.div`
  max-width: var(--pageMaxWidth);
  margin: 0 auto;
  width: 90%;
  padding: 3rem 0;
  flex: 1;

  .title {
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--txtColour);
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .sub-text {
    font-size: 1.2rem;
    color: var(--txtColour);
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .block {
    transition: all 0.3s ease-in-out;
    box-shadow: var(--boxShadow);
    overflow: hidden;

    &:hover {
      transform: translateY(-5px) !important;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    img {
      transition: transform 0.4s ease;
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &:hover img {
      transform: scale(1.05);
    }
  }

  .block .project-title { font-size: 1.3rem; }

  .block .description { font-size: 1.1rem; }

  .block .project-link a {
    font-size: 1.1rem;
    padding: 10px 14px;
  }

  @media (max-width: 1200px) {
    .block .project-info { padding: 1.5rem; }
    .block .project-title { font-size: 1.2rem; }
    .block .description { font-size: 1rem; }
    .block .project-link a { font-size: 1rem; }
  }

  @media only screen and (max-width: 992px) {
    max-width: 700px;

    .title { 
      font-size: 2.8rem;
      text-align: center;
      padding-bottom: 0.5rem; 
    }

    .projects {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    } 
  }
`;

export default Projects