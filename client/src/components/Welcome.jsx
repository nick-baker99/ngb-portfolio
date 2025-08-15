import styled from 'styled-components'

const Welcome = () => {
  return (
    <WelcomeStyles name="home">
      <div className="wrapper">
        <div className="welcome-text">
          <h2 className="sub-title">Welcome</h2>
          <h1 className="title main-title">Hi, I'm Nick</h1>
          <p className="intro">I'm a passionate full-stack web developer specializing in creating efficient and user-friendly web applications.</p>
          <a href="#" target="_blank" className="cv-btn">Download CV</a>
        </div>
        <div className="welcome-img">
          <img loading="lazy" src="images/profile.png" alt="profile image" />
        </div>
      </div>
    </WelcomeStyles>
  )
}

const WelcomeStyles = styled.section`
  min-height: calc(100vh - var(--headerHeight));
  display: flex;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  .welcome-text {
    max-width: 650px;
  }
  .welcome-img {
    max-width: 450px;
    img {
      width: 100%;
    }
  }
  .main-title {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  .intro {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  .cv-btn {
    background: var(--buttonBg);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 12px 20px;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s ease;

    &:hover {
      background: var(--buttonHoverBg);
    }
  }
  @media only screen and (max-width: 1200px) {
    .welcome-img {
      max-width: 400px;
    }
    .main-title {
      font-size: 2.6rem;
      margin-bottom: 1rem;
    }
    .intro {
      font-size: 1.2rem;
    }
    .cv-btn {
      font-size: 1.1rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .welcome-img {
      max-width: 400px;
    }
    .main-title {
      font-size: 2.4rem;
    }
    .intro {
      font-size: 1.1rem;
    }
    .cv-btn {
      font-size: 1.1rem;
    }
  }
`;

export default Welcome