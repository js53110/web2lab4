const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 443;

// Serve static files (including index.html) from the public folder
app.use(express.static("public"));

// Load the SSL certificate and private key
const privateKey = fs.readFileSync("key.pem", "utf8");
const certificate = fs.readFileSync("cert.pem", "utf8");

const credentials = {
  key: privateKey,
  cert: certificate,
};

// Create an HTTPS server with the configured options
const httpsServer = https.createServer(credentials, app);

// Handle HTTPS server errors
httpsServer.on("error", (error) => {
  console.error("Error starting HTTPS server:", error);
});

// Start the server
httpsServer.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
