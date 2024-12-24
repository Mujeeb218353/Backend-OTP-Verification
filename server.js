const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Sample OTP (for demonstration purposes)
const CORRECT_OTP = "123456";

// Middleware to log incoming requests for debugging
app.use((req, _, next) => {
  console.log(`${req.method} ${req.path}`);
  next(); // Move to the next middleware or route handler
});

// Route to handle OTP verification
app.post("/verify-otp", (req, res) => {
  // Extract OTP from the request body
  const { otp } = req.body;

  // Check if the entered OTP matches the predefined correct OTP
  if (otp === CORRECT_OTP) {
    // If OTP is correct, respond with a success message
    return res
      .status(200)
      .json({ success: true, message: "OTP Verified Successfully" });
  } else {
    // If OTP is incorrect, respond with an error message
    return res
      .status(400)
      .json({ success: false, message: "Invalid OTP, Please Try Again" });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
