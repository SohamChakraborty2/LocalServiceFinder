import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(cors());

app.get('/maps-api/*', async (req, res) => {
  const apiUrl = `https://maps.googleapis.com${req.url}`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      // Handle non-successful response status
      const errorText = await response.text();
      res.status(response.status).send(errorText);
      return;
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
