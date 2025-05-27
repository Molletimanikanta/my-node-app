require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Default message";

app.get('/', (req, res) => {
  res.send(MESSAGE);
});

// Compress response for low bandwidth
app.use(require('compression')());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
