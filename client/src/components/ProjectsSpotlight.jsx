import styled from "styled-components"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProjectBlock from "./ProjectBlock";
import projectData from "../data/projects";


const ProjectsSpotlight = () => {
  const [intersectionRef, isVisible] = useIntersectionObserver();

  return (
    <SpotlightStyles>
      <div className={`wrapper ${isVisible ? "show" : ''}`} ref={intersectionRef}>
        <h2 className="sub-title">Projects</h2>
        <h1 className="title">Latest Projects</h1>
        <div className="projects-spotlight">
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