"use strict";

const express = require('express');
require('dotenv').config();

const app = express();
const port = 8080;

app.use(express.static('./public'));

app.get('/api/photos', async (req, res) => {
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const endpoint = `?query=beaches&per_page=12&page=1&client_id=${process.env.CLIENT_ID}`;
  try {
    const apiResponse = await fetch(BASE_URL + endpoint);
    const data = await apiResponse.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch from Unsplash' });
  }
});


app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log('Press Ctrl+C to end this process.');
});