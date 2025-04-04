import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageNotFound from './PageNotFound';
import projectData from "../data/projects";

const Project = () => {
  const { name } = useParams();

  const project = projectData.find(item => item.slug === name);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <ProjectStyles>Project</ProjectStyles>
  )
}

const ProjectStyles = styled.div`
  flex: 1;
`;

export default Project