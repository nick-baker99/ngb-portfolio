const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();

// enable CORS
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));