const IMAGE_PATH = "../images/projects/details/jokester";

const PlfaDetails = () => {
  return (
    <div className="project-details">
      <h2 className="title">Jokester Introduction</h2>
      <p className="description"></p>
      <img src={`${IMAGE_PATH}/landing.jpg`} alt="landing page" />
      <h2 className="title">Generated Joke</h2>
      <p className="description">Once a joke is generated the user can copy to clipboard if they would like to share it. The user can choose to leave feedback via like or dislike buttons. New joke will generate another random joke.</p>
      <img src={`${IMAGE_PATH}/generated-joke.jpg`} alt="generated joke" />
      <h2 className="title">Feedback</h2>
      <img src={`${IMAGE_PATH}/feedback.jpg`} alt="feedback" />
    </div>
  )
}

export default PlfaDetails