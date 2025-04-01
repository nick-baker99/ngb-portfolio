import { useEffect } from "react"
import styled from "styled-components";

const Projects = () => {
  useEffect(() => {
    document.title = "Nick Baker - Projects";
  }, []);
  
  return (
    <ProjectsStyles>
      <h1 className="title">My Projects</h1>
      <div className="projects">
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
    padding: 1rem;
    border-bottom: 2px solid var(--txtColour);
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

export default Projects