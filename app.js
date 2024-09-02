const express = require("express");
const app = express();

// Define a sample route to handle POST requests
app.post("/api/data", (req, res) => {
  // Process the incoming request data
  const requestData = req.body;
  // Send a response back to the client
  res.send({ message: "Data received successfully" });
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
