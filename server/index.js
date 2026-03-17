require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve the static website from the parent directory
app.use(express.static(path.join(__dirname, '..')));

// Proxy endpoint — frontend calls this instead of Anam directly
app.post('/api/anam/session', async (req, res) => {
  try {
    const response = await fetch('https://api.anam.ai/v1/auth/session-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ANAM_API_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Anam session error:', err.message);
    res.status(500).json({ error: 'Failed to create Anam session' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
