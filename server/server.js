const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');

const app = express();

// enable CORS
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;

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

    // define nodemailer transporter for gmail
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_EMAIL_ADDRESS,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GOOGLE_EMAIL_ADDRESS,
      to: process.env.GOOGLE_EMAIL_ADDRESS,
      subject: "New message from NGB portfolio",
      text: `
        Hello Nick,
        You have a new message from the NGB portfolio website.
        The following message is from:
        Name: ${name}
        Email Address: ${email}
        Message:
        ${message}
        
        Best wishes,NGB Portfolio
      `,
      html: `
        <img src="https://as2.ftcdn.net/jpg/03/38/94/03/1000_F_338940342_hdWy3vdt3PyazCqIOmj1y0LgN1XsLtns.jpg" alt="email header">
        <p>Hello Nick,</p>
        <p>You have a new message from the NGB portfolio website.</p>
        <p>The following message is from:&nbsp;</p>
        <p>Name: ${name}</p>
        <p>Email Address: ${email}</p>
        <p>Message:</p>
        <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${message}</p>
        <br>
        <img src="https://img.resultclothing.net/misc/ngb_logo.png" alt="NGB Logo">
        <p>Best wishes,<br>NGB Portfolio</p>
      `
    };
    // send mail via transporter
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email: ", error);
        return res.status(500).json({ success: false, message: "Error sending email" });
      }
    });

    // verification was successful
    res.status(200).json({ success: true, message: "Message sent" });
  } catch (error) {
    // API error
    res.status(500).json({ success: false, message: "reCAPTCHA verification error" });
  }
});

// Serve React build files
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));