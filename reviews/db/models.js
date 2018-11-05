var knex = require('./index.js');

const itemNameToId = (name) => {
  return new Promise((resolve, reject) => {
    knex.select('id').from('items').limit(1).where({name})
      .then((result) => resolve(result[0]['id']))
      .catch((err) => reject(err));
  });
}

const fetchReviewCountById = (id) => {
  return new Promise((resolve, reject) => {
    knex('reviews').count('rating').where({'item_id': id})
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  })
}

const fetchReviewsById = (id) => {
  return new Promise((resolve, reject) => {
    knex.from('reviews').innerJoin('items', 'reviews.item_id', 'items.id').where({'items.id': id}).limit(10)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  })
}

const fetchAverageRatingById = (id) => {
  return new Promise((resolve, reject) => {
    knex('reviews').avg('rating').where({item_id: id})
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  })
}

const fetchReviewImagePathsById = (id) => {
  return new Promise((resolve, reject) => {
    knex('reviews').select('image_path').where({item_id: id}).whereNotNull('image_path')
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  })
}

// fetchAverageRatingById(1).then((result) => console.log(result));
// countReviewsById(1).then((result) => console.log(result));

module.exports = {
  itemNameToId,
  fetchReviewsById,
  fetchAverageRatingById,
  fetchReviewImagePathsById,
  fetchReviewCountById
};
