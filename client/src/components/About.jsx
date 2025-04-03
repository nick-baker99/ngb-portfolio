import styled from "styled-components";
import ContactLink from "./ContactLink";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import skills from '../assets/skills.json';
import SkillBlock from "./SkillBlock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
  const [leftIntersectionRef, leftIsVisible] = useIntersectionObserver();
  const [rightIntersectionRef, rightIsVisible] = useIntersectionObserver(0.6);

  return (
    <AboutStyle name="about">
      <div className="wrapper">
        <div className={`profile fade-left ${leftIsVisible ? "show" : ''}`} ref={leftIntersectionRef}>
          <h2 className="sub-title">About</h2>
          <h1 className="title">My Profile</h1>
          <p className="profile-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa diam, tincidunt sit amet nulla nec, luctus dapibus massa. Proin dictum, orci sed hendrerit sagittis, neque odio fringilla dolor, eu hendrerit metus enim at arcu. Nam eu sapien a nunc feugiat porttitor vel eget libero. In varius condimentum porta. Suspendisse porta massa eget diam egestas, vitae porta nunc dapibus. Integer feugiat tristique feugiat. Nullam eu orci ac libero vulputate tempus.</p>
          <div className="contact-info">
            <h3 className="title small">Contact Details</h3>
            <div className="contact-links">
              <ContactLink
                link="https://www.linkedin.com/in/nick-baker-7b958b198"
                text="Nick Baker"
                icon={<FaLinkedin />}
                target="_blank"
              />
              <ContactLink
                link="https://github.com/nick-baker99"
                text="Nick-Baker99"
                icon={<FaGithub />}
                target="_blank"
              />
              <ContactLink
                link="mailto:ngbaker99@gmail.com"
                text="ngbaker99@gmail.com"
                icon={<FaEnvelope />}
              />
            </div>
          </div>
        </div>
        <div className={`skills fade-right ${rightIsVisible ? "show" : ''}`} ref={rightIntersectionRef}>
          <h3 className="sub-title">&nbsp;</h3>
          <h3 className="title small">My Skills</h3>
          <div className="skill-blocks">
            {skills.map((item, index) => <SkillBlock key={index} title={item.title} image={item.image} />)}
          </div>
        </div>
      </div>
    </AboutStyle>
  )
}

const AboutStyle = styled.section`
  background-color: var(--secondaryBg);
  padding: 3rem 2rem;

  @media (max-width: 992px) {
    padding: 3rem 0;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 2rem;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  .profile {
    max-width: 600px;
    width: 100%; 
    @media (max-width: 992px) {
      max-width: none;
      display: flex;
      flex-direction: column;
      align-items: center; 
      text-align: center;
    }
  }

  .profile-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .contact-info {
    margin-top: 1rem;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
  }

  .skill-blocks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 1rem;
    justify-items: center;
  }

  .skills .sub-title { visibility: hidden; }
`;

export default About