const IMAGE_PATH = "../images/projects/details/plfa";

const PlfaDetails = () => {
  return (
    <div className="project-details">
      <h2 className="title">Landing Page</h2>
      <p className="description"></p>
      <img src={`${IMAGE_PATH}/landing-1.jpg`} alt="landing page section 1" />
      <img src={`${IMAGE_PATH}/landing-2.jpg`} alt="landing page section 2" />
      <h2 className="title">Register & Login</h2>
      <p className="description">A PLFA account is required to gain access to the fan chatrooms and fantasy football pages. Users can register for a PLFA account via the multi-step registration form.</p>
      <img src={`${IMAGE_PATH}/create-account-1.jpg`} alt="register page 1" />
      <img src={`${IMAGE_PATH}/create-account-2.jpg`} alt="register page 2" />
      <h2 className="title">Fan Chatrooms</h2>
      <p className="description">Fans can interact with each other in a number of live chatrooms. There are individual chatrooms for each football team so fans can share their opinions about their favourite team.</p>
      <img src={`${IMAGE_PATH}/chatrooms.jpg`} alt="fan chatrooms" />
    </div>
  )
}

export default PlfaDetails