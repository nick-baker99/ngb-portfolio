require("dotenv").config({ path: `${__dirname}/.env` });
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// enable CORS
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
  const { recaptchaToken } = req.body;

  // check for missing token in the request
  if (!recaptchaToken) {
    return res.status(400).json({ success: false, message: "reCAPTCHA token missing" });
  }

  // verify reCAPTCHA with the google API
  const apiRequest = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECPATCHA_SECRET}&response=${recaptchaToken}`;

  try {
    // send API request
    const response = await axios.post(apiRequest);

    if (!response.data.success) {
      // verification was unsuccessful
      return res.status(400).json({ success: false, message: "Failed to verify reCAPTCHA" });
    }

    // verification was successful
    res.status(200).json({ success: true, message: "reCAPTCHA verified" });
  } catch (error) {
    // API error
    res.status(500).json({ success: false, message: "reCAPTCHA verification error" });
  }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));