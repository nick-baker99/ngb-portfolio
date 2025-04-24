const IMAGE_PATH = "../images/projects/details/washtec";

const WashtecDetails = () => {
  return (
    <div class="project-details">
      <h2 className="title">Landing Page</h2>
      <p className="description"></p>
      <img src={`${IMAGE_PATH}/landing.jpg`} alt="Washtec landing page" />
      <h2 className="title">Multi-page Questionnaire</h2>
      <p className="description">Multi-step form where users enter details about their car wash equipment, this data will then be used to calculate the final result.</p>
      <img src={`${IMAGE_PATH}/question-1.jpg`} alt="question 1" />
      <img src={`${IMAGE_PATH}/question-2.jpg`} alt="question 2" />
      <img src={`${IMAGE_PATH}/question-3.jpg`} alt="question 3" />
      <img src={`${IMAGE_PATH}/question-4.jpg`} alt="question 4" />
      <h2 className="title">Results Page</h2>
      <p className="description">The results page displays the user's estimated average monthly water consumtion cost based on the data they input. A Washtec product is then be recommended as an alternative with the average consumtion cost as a selling factor.</p>
      <img src={`${IMAGE_PATH}/results.jpg`} alt="results page" />
    </div>
  )
}

export default WashtecDetails;