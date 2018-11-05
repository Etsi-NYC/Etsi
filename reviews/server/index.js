const express = require('express');
const morgan = require('morgan');
const path = require('path');
const models = require('./../db/models');
var cors = require('cors')

const app = express();

app.use(morgan('dev'));

app.use(cors())

app.use(express.static(path.join(__dirname, './../client/dist')));

app.get('/', (req, res) => res.send('Hello world!'));

const fetchAndSendReviewsInfo = (id, res) => {
  Promise.all([
    models.fetchReviewsById(id),
    models.fetchAverageRatingById(id),
    models.fetchReviewImagePathsById(id),
    models.fetchReviewCountById(id)
  ])
  .then((values) => {
    var reviewInfo = {
      reviews: values[0],
      averageRating: values[1][0]['avg(`rating`)'],
      imagePaths: values[2].map((obj) => obj.image_path),
      reviewCount: values[3][0]['count(`rating`)']
    }
    res.send(reviewInfo);
  })
}

app.get('/reviews', (req, res) => {
  console.log(req.query.id);
  if (!req.query.id && !req.query.name) res.status(400).send('Must include either item ID or item name in query')
  if (!req.query.id) {
    models.itemNameToId(req.query.name)
      .then((id) => fetchAndSendReviewsInfo(id, res))
      .catch((err) => console.log(err));
  } else {
    fetchAndSendReviewsInfo(req.query.id, res)
  }
})

var port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server now listening on port ${port}`));