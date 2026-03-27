const IMAGE_PATH = "../images/projects/details/another-rep";

const AnotherRepDetails = () => {
  return (
    <div className="project-details">
      <h2 className="title">Description</h2>
      <p className="description">A free workout generator. Pick a muscle group, what equipment you have, and your experience level — it builds you a workout with sets, reps, rest times, and instructions for each exercise.
        <br />
        <br />
        No subscription. No ads. No AI-generated content — the exercise library is hand-picked and the generation logic is deterministic.
      </p>
      <p className="description">The site includes pages and features such as:</p>
      <h2 className="title">Pages</h2>
      <ul className="description">
        <li><span className="page-title">Menu</span> - Highlighting the company's offerings.</li>
        <li><span className="page-title">Company Story</span> - A section to share the background and values of the company.</li>
        <li><span className="page-title">Reviews</span> - Customer testimonials displayed with a clean layout.</li>
        <li><span className="page-title">Custom Order Page</span> - Allowing users to submit custom requests or orders.</li>
      </ul>

      <h2 className="title">Features</h2>
      <ul className="description">
        <li><span className="page-title">Instant workout generation</span> - select a muscle group, equipment, and experience level and get a full workout in one click.</li>
        <li><span className="page-title">No account required</span> - generate as many workouts as you want without signing up.</li>
        <li><span className="page-title">Save workouts</span> - create a free account to save, rename, and revisit past workouts from your dashboard.</li>
        <li><span className="page-title">Exercise instructions</span> - every exercise includes sets, reps, rest times, and a description of how to perform it.</li>
      </ul>

      <h2 className="title">Landing Page</h2>
      <img src={`${IMAGE_PATH}/landing-1.jpg`} alt="landing page section 1" />
      <img src={`${IMAGE_PATH}/landing-2.jpg`} alt="landing page section 2" />

      <h2 className="title">Workout Generator Page</h2>
      <p className="description">The core of the app. Select a muscle group, the equipment available to you, and your experience level — then generate a full workout instantly. Each exercise includes a name, sets, reps, rest time, and a description of proper form.</p>
      <img src={`${IMAGE_PATH}/generate-wokout.jpg`} alt="generate workout page preview 1" />
      <img src={`${IMAGE_PATH}/generate-wokout-2.jpg`} alt="generate workout page preview 2" />

      <h2 className="title">Saved Workouts Page</h2>
      <p className="description">Logged-in users can save any generated workout to their dashboard. Saved workouts can be renamed and revisited at any time, making it easy to repeat a session or track what you've been doing.</p>
      <img src={`${IMAGE_PATH}/workouts-1.jpg`} alt="saved workouts page preview 1" />
      <img src={`${IMAGE_PATH}/workouts-2.jpg`} alt="saved workouts page preview 2" />

      <h2 className="title">Login/Register Pages</h2>
      <p className="description">Creating an account is free and only required if you want to save workouts. The login and register pages are kept minimal — just an email and password, no unnecessary fields.</p>
      <img src={`${IMAGE_PATH}/auth-login.jpg`} alt="login page preview" />
      <img src={`${IMAGE_PATH}/auth-register.jpg`} alt="register page preview" />
    </div>
  )
}

export default AnotherRepDetails