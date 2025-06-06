// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());  // allows frontend access
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello from backend! what the fuck bodd" });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
