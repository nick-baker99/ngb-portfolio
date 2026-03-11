const IMAGE_PATH = "../images/projects/details/velvet-whisk";

const VelvetWhiskDetails = () => {
  return (
    <div className="project-details">
      <h2 className="title">Description</h2>
      <p className="description">Velvet Whisk is a simple React website template for a concept company, designed to showcase a vibrant and modern aesthetic. This template uses a simplistic design with bold, vibrant colors to present company information in a clear and engaging way.</p>
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
        <li>Built with React and TypeScript.</li>
        <li>Responsive and mobile-friendly layout.</li>
        <li>Styled using Tailwind CSS.</li>
        <li>Simple and modular component structure for easy customization.</li>
        <li>Includes routing for multiple pages with React Router.</li>
      </ul>

      <h2 className="title">Landing Page</h2>
      <img src={`${IMAGE_PATH}/landing-1.jpg`} alt="landing page section 1" />
      <img src={`${IMAGE_PATH}/landing-2.jpg`} alt="landing page section 2" />
      <img src={`${IMAGE_PATH}/landing-3.jpg`} alt="landing page section 3" />

      <h2 className="title">About Us Page</h2>
      <img src={`${IMAGE_PATH}/about-1.jpg`} alt="about us page section 1" />
      <img src={`${IMAGE_PATH}/about-2.jpg`} alt="about us page section 2" />

      <h2 className="title">Menu Page</h2>
      <p className="description">A full menu list of the company's offerings. Includes the ability to filter by category.</p>
      <img src={`${IMAGE_PATH}/menu.jpg`} alt="menu page preview" />

      <h2 className="title">Order Page</h2>
      <p className="description">Customers can request a custom order for an event e.g. Wedding, Birthday Party, Corporate Event.</p>
      <img src={`${IMAGE_PATH}/order.jpg`} alt="order page preview" />

      <h2 className="title">Reviews Page</h2>
      <p className="description">Customers can leave a review or read reviews others have written.</p>
      <img src={`${IMAGE_PATH}/reviews.jpg`} alt="reviews page preview" />
    </div>
  )
}

export default VelvetWhiskDetails