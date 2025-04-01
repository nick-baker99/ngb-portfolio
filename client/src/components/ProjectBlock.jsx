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
    line-height: 1.5;
    margin-bottom: 1.5rem;
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
`;

export default ProjectBlock