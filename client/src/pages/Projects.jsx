import { useEffect } from "react"
import styled from "styled-components";
import ProjectBlock from "../components/ProjectBlock";

const Projects = () => {
  useEffect(() => {
    document.title = "Nick Baker - Projects";
  }, []);
  
  return (
    <ProjectsStyles>
      <h1 className="title">My Projects</h1>
      <div className="projects">
        <ProjectBlock 
          title="PLFA (in progress)"
          description="A football fan social platform. Live chatrooms, football stats and a fantasy football competition."
          image="plfa.jpg"
          link="/projects/plfa"
          icons={[
            "react",
            "node", 
            "mongo",
            "figma"
          ]}
        />
        <ProjectBlock 
          title="WashTec Car Wash Calculator"
          description="Users enter details about their car wash equipment and the calculator works out the water usage and how much could be saved."
          image="washtec.jpg"
          link="/projects/washtec"
          icons={[
            "php",
            "mysql",
            "figma"
          ]}
        />
        <ProjectBlock 
          title="Jokester"
          description="A random jokes generator that can deliver over 200,000 jokes. Users can provide feedback on each joke."
          image="jokester.jpg"
          link="/projects/jokester"
          icons={[
            "react",
            "figma"
          ]}
        />
        <ProjectBlock 
          title="QR Code Generator"
          description="Generates a QR code image from a chosen URL and image pixel size."
          image="qr.jpg"
          link="/projects/qr"
          icons={[
            "react",
            "figma"
          ]}
        />
        <ProjectBlock 
          title="NGB Portfolio"
          description="Portfolio website for Nick Baker - Full stack developer."
          image="portfolio.jpg"
          link="/projects/portfolio"
          icons={[
            "react",
            "node",
            "figma",
          ]}
        />
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
    margin-bottom: 2rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .block {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.025);
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