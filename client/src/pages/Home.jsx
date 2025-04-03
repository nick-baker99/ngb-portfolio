import Welcome from '../components/Welcome';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsSpotlight from '../components/ProjectsSpotlight';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
  const [searchParams] = useSearchParams();
  const scrollTo = searchParams.get("scrollto");

  useEffect(() => {
    if (!scrollTo) return;

    document.getElementsByName(scrollTo)[0].scrollIntoView({ behavior: "instant" });
  }, [scrollTo]);

  // set document title
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