const IMAGE_PATH = "../images/projects/details/qr-generator";

const WashtecDetails = () => {
  return (
    <div class="project-details">
      <h2 className="title">Generating a QR Code</h2>
      <p className="description">simple, user-friendly QR code generator built to convert any URL into a downloadable QR code image. Users can input a URL and specify the desired pixel size for the image. Upon submission, a QR code is dynamically generated, displayed as a live preview, and available for download in image format.</p>
      <img src={`${IMAGE_PATH}/generated-qr.jpg`} alt="Washtec landing page" />
      <h2 className="title">Result Image</h2>
      <img src={`${IMAGE_PATH}/qr-code.png`} alt="generated QR code" />
    </div>
  )
}

export default WashtecDetails;