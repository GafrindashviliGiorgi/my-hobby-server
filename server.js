const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const app = express(); // ✅ ეს აკლდა
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.get('/my-hobby', (req, res) => {
  res.json({ hobby: "ლაშქრობა და ცხენით სეირნობა" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
