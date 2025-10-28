"use strict";

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 8080;

const corsOptions = {
  origin: `http://localhost:${port}`,
};
app.use(cors(corsOptions));

app.use(express.static('./public'));

app.get('/api/photos', async (req, res) => {
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const searchTerm = req.query.query;
  const page = req.query.page || 1;
  console.log(searchTerm, page); // 'dogs running 1'

  const endpoint = `?query=${encodeURIComponent(
    searchTerm
  )}&per_page=12&page=${page}&client_id=${process.env.CLIENT_ID}`;

  try {
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
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