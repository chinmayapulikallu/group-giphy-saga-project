const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// test for api key connected
console.log('GIPHY_API_KEY:', process.env.GIPHY_API_KEY);



// GET AXIOS
app.get('/search', (req, res) => {
  // console.log('req.query contains:', req.params)
  console.log('in /search GET with searchTerm', searchTerm);
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}'&q='${searchTerm}}'&limit=25&offset=0&rating=G&lang=en`)
    .then((response) => {
      res.send(response.data);

    }).catch((error) => {
      console.log(error);
      res.send(500);
    })
})

// POST AXIOS
app.post('/search', (req, res) => {
  let searchTerm = req.body.search;
  console.log('in /search POST', req.body)
    .then((response) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log('In POST with',error)
    })
})

// router.post('/', (req, res) => {
//   const itemToAdd = req.body;
//   // give the fruit an id so we can delete it later
//   itemToAdd.id = idGenerator.next().value;
//   basket.push(itemToAdd);
//   res.sendStatus(201);
// });

/* SEARCH URL: 'https://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_API_KEY + '&q=' + PANDA + '&limit=25&offset=0&rating=G&lang=en' */

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
