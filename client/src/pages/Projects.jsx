import { useEffect } from "react"

const Projects = () => {
  useEffect(() => {
    document.title = "Nick Baker - Projects";
  }, []);
  
  return (
    <div>Projects</div>
  )
}

export default Projects