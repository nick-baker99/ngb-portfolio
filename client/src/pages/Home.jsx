import Welcome from '../components/Welcome';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsSpotlight from '../components/ProjectsSpotlight';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Nick Baker - Full Stack Developer";
  }, []);
  return (
    <>
      <Welcome />
      <About />
      <ProjectsSpotlight />
      <Contact />
    </>
  )
}

export default Home