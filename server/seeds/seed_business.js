
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('business').del(),

    // Inserts seed entries
    knex('business').insert({id: 1,
      name: 'Business 1',
      phone: "7204814142",
      address: "28065 Hwy 74, Evergreen, CO 80439",
      image_url_small: "https://s3-media3.fl.yelpcdn.com/bphoto/kvddV4S62WCqtRZiRxTlUA/ms.jpg",
      reservation_url: "",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
      lat: 39.6332817,
      long: -105.3184662}),
    knex('business').insert({id: 2,
      name: 'Business 1',
      phone: "3036700433",
      address: "28065 Hwy 74, Evergreen, CO 80439",
      image_url_small: "https://s3-media2.fl.yelpcdn.com/bphoto/k6SVcaVJtgDxI6y653NsRw/ms.jpg",
      reservation_url: "",
      rating_img_url_small: "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
      lat: 39.6332817,
      long: -105.3184662}),
    knex('business').insert({id: 3,
      name: 'Business 1',
      phone: "720-481-4142",
      address: "28065 Hwy 74, Evergreen, CO 80439",
      image_url_small: "https://s3-media2.fl.yelpcdn.com/bphoto/k6SVcaVJtgDxI6y653NsRw/ms.jpg",
      reservation_url: "",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      lat: 39.6332817,
      long: -105.3184662}),
    knex('business').insert({id: 4,
      name: 'Business 1',
      phone: "720-481-4142",
      address: "28065 Hwy 74, Evergreen, CO 80439",
      image_url_small: "https://s3-media2.fl.yelpcdn.com/bphoto/vixxJzC8bg3_PKgF9yX8iQ/ms.jpg",
      reservation_url: "",
      rating_img_url_small: "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      lat: 39.6332817,
      long: -105.3184662})

    );
  };
