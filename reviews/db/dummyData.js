var lorem = require('lorem-ipsum');

var items = [];

for (let j = 0; j < 100; j++) {
  items.push({
    name: lorem({count: 1, units: 'words'}),
    id: j,
    image_path: 'https://s3.us-east-2.amazonaws.com/hack-reactor-etsi/boots.JPG'
  })
}

var reviews = [];

for (let k = 0; k < 100; k++) {
  for (let i = 0; i < 15; i++) {
    let username = ['Al', 'Bob', 'Charlie'][i % 3];
    let profile_pic_path = ['https://www.zooportraits.com/wp-content/uploads/2018/05/Koala-Phascolarctos-Cinereus.jpg',
    'https://image.shutterstock.com/image-illustration/tiger-head-hand-draw-paint-260nw-508640131.jpg',
    'https://c1.staticflickr.com/8/7148/6577819847_a77021d29b_b.jpg',
    'https://i.pinimg.com/originals/1a/ff/f3/1afff312c4a098869751f43233f25a7f.jpg'][i % 4];
    let rating = [5, 3.5, 4, 4.5, 2, 3][i % 6];
    let wordCount = [15, 50, 100, 150][i % 4]
    let comment = lorem({count: wordCount, units: 'words'});
    let item_id = k;
    let review_id = Number('' + k + i);
    let image_path = [
      'https://static.pixlee.com/photos/230467187/medium/f805de892f64650e6bc9.jpg',
      'https://di2ponv0v5otw.cloudfront.net/posts/2018/08/29/5b86f3508ad2f9f7e7704240/m_5b86f3601b16dbab44142290.jpg',
      'https://www.americancowboy.com/.image/t_share/MTQ1MDQxNzMxNDQwNzQ4MjYx/boots.jpg',
      'http://www.medodeal.com/wp-content/uploads/2017/10/western-boots-fancybox-bmtuesq-.jpg',
      'https://blog.travis-ci.com/images/2015-josh-boots.jpg',
      'https://wehearthandmadeboots.com/wp-content/uploads/2018/06/miguel-cowboy-boots-300x300.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOc3at0H4jg0Lj0jVZ_KuLSCOKwjfDmbQlfHekDR7e6g6QDjvQWA',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6DndAujqBXtF_2GZ_KEQvR7N3zEGv9h_OjTlzWtGCHNPb2fEFg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnoj-bP5QGWedd0tH-V_EInTEs7_YEudLjecGkiU0P42tnoBp'
    ][i % 9];
    reviews.push({
      username,
      profile_pic_path,
      date: '1991-01-01',
      rating,
      item_id,
      comment,
      image_path,
      review_id
    })
  }
}

exports.items = items;
exports.reviews = reviews;