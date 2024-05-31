const express = require('express');
const axios = require('axios');
const fs = require('fs');
const cron = require('node-cron');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.NEWS_API_KEY || '348d27d73dc04411ac2d71b362b7f7e5';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;
const JSON_FILE_PATH = 'news.json';

// Middleware to handle CORS
app.use(cors());

// Function to fetch news and save to JSON file
const fetchNewsAndUpdateFile = async () => {
  try {
    const response = await axios.get(NEWS_URL);
    const newsData = response.data;

    // Filter out articles with missing title, description, or urlToImage
    const filteredArticles = newsData.articles.filter(article => 
      article.title !== null && 
      article.description !== null && 
      article.urlToImage !== null
    );

    // Update the newsData object with the filtered articles
    newsData.articles = filteredArticles;

    // Write content into JSON file
    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(newsData, null, 2));
    // Get the current date and time
    const currentTime = new Date().toLocaleString();
    console.log(`News data updated at ${currentTime}`);
  } catch (error) {
    console.error('Error fetching news data:', error.message);
  }
};

// Schedule task to run every hour
cron.schedule('0 * * * *', fetchNewsAndUpdateFile);

// Initial fetch on server start
fetchNewsAndUpdateFile();

// Endpoint to serve the news JSON file
app.get('/news', (req, res) => {
  fs.readFile(JSON_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading news data:', err.message);
      res.status(500).send('Error reading news data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
