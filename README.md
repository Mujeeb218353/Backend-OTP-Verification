# Simple OTP Verification API with Node.js and Express

This document describes a basic Node.js and Express application that implements a simple OTP (One-Time Password) verification API.

**Functionality**

The API provides a single endpoint (`/verify-otp`) for verifying a user-submitted OTP against a predefined correct OTP value.

**Prerequisites**

- Node.js and npm (or yarn) installed on your system. You can download Node.js from the official website: [https://nodejs.org/](https://nodejs.org/)

## Getting Started

### 1. Clone the Repository:

```bash
git clone https://github.com/Mujeeb218353/Backend-OTP-Verification.git
```

### 2. Navigate to the Project Directory:

```bash
cd backend
```

### 3. Install Dependencies:

```bash
npm install
```

### 4. Start the Development Server:

```bash
npm start
```

### 5. Verify OTP:

- You can use tools like Postman or curl to send a POST request to the /verify-otp endpoint with the OTP value in the request body (JSON format):

#### JSON
``` bash
{
  "otp": "123456" // Replace with the actual OTP you want to verify
}
```

- If the provided OTP matches the predefined CORRECT_OTP value in the code, the API will respond with a success message (status code 200).

- If the OTP doesn't match, the API will respond with an error message (status code 400).
