import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page not found"
  }, []);

  return (
    <NotFoundStyles>
      <h1 className="title main-title">404</h1>
      <h2 className="title">Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" className="home-btn">Home</Link>
    </NotFoundStyles>
  )
}

const NotFoundStyles = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .title {
    font-size: 2.4rem;
    font-weight: 600;
  }

  .main-title {
    font-size: 7rem;
    letter-spacing: 0.05em;
    margin-bottom: 0;
    font-weight: 500;
    line-height: 1em;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .home-btn {
    background: var(--buttonBg);
    font-size: 1.3rem;
    color: var(--buttonColour);
    font-weight: bold;
    padding: 10px 20px;
  }
`;

export default PageNotFound