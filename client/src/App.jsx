import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectsSpotlight from './components/ProjectsSpotlight';
import Welcome from './components/Welcome';

function App() {

  return (
    <>
      <Header />
      <Welcome />
      <About />
      <ProjectsSpotlight />
      <Contact />
      <Footer />
    </>
  )
}

export default App
