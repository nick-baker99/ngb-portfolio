import styled from "styled-components"

const ProjectBlock = ({ title, description, image, link }) => {
  return (
    <BlockStyles>
      <img 
        loading="lazy" 
        src={`images/projects/${image}`} 
        alt={`${title} preview`} 
      />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="description">{description}</p>
        <div className="project-link">
          <a href={link} aria-label={`View details for ${title}`}>View Project</a>
        </div>
      </div>
    </BlockStyles>
  )
}

const BlockStyles = styled.div`
  background-color: var(--paleBlue);
  border-radius: 5px;
  overflow: hidden;
  text-align: left;
  /* box-shadow: 0 0 4px rgba(0,0,0,0.3); */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    border-radius: 5px;
  }
  .project-info {
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
    color: #222;
    font-size: 1rem;
  }
  .description {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  .project-link a {
    display: inline-block;
    background: var(--mainBlue);
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    padding: 8px 12px;
    font-size: 0.9rem;
    transition: transform 0.3s ease-in-out;
  }
  .project-link a:hover {
    background: #0162fe;
    transform: scale(1.05);
  }
`;

export default ProjectBlock