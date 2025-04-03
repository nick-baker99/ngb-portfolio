import styled from "styled-components"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProjectBlock from "./ProjectBlock";


const ProjectsSpotlight = () => {
  const [intersectionRef, isVisible] = useIntersectionObserver();

  return (
    <SpotlightStyles>
      <div className={`wrapper fade-right ${isVisible ? "show" : ''}`} ref={intersectionRef}>
        <h2 className="sub-title">Projects</h2>
        <h1 className="title">Latest Projects</h1>
        <div className="projects-spotlight">
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
      </div>
    </SpotlightStyles>
  )
}

const SpotlightStyles = styled.section`
  text-align: center;

  .title {
    margin-bottom: 3rem;
  }

  .projects-spotlight {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      max-width: 600px;
      grid-template-columns: 1fr;
    }
  }

`;

export default ProjectsSpotlight