
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('member').del(),

    // Inserts seed entries
    knex('member').insert({id: 1,
      first_name: 'June',
      last_name: 'Shaw',
      contact_info_id: 1,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 2,
      first_name: 'Bob',
      last_name: 'Gauen',
      contact_info_id: 2,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 3,
      first_name: 'Dee',
      last_name: 'Metzger',
      contact_info_id: 3,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 4,
      first_name: 'June',
      last_name: 'dotenv',
      contact_info_id: 1,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 5,
      first_name: 'Will',
      last_name: 'Williams',
      contact_info_id: 2,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 6,
      first_name: 'Derek',
      last_name: 'Metzger',
      contact_info_id: 3,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 7,
      first_name: 'Kanye',
      last_name: 'Shaw',
      contact_info_id: 1,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 8,
      first_name: 'Autumn',
      last_name: 'Gauen',
      contact_info_id: 2,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 9,
      first_name: 'Linda',
      last_name: 'Metzger',
      contact_info_id: 3,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 10,
      first_name: 'Karen',
      last_name: 'Smith',
      contact_info_id: 1,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 11,
      first_name: 'Franco',
      last_name: 'Francisco',
      contact_info_id: 2,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 12,
      first_name: 'Eli',
      last_name: 'Umatilla',
      contact_info_id: 3,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 13,
      first_name: 'Paul',
      last_name: 'Gaffigan',
      contact_info_id: 1,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 14,
      first_name: 'Shane',
      last_name: 'Thomas',
      contact_info_id: 2,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"}),
    knex('member').insert({id: 15,
      first_name: 'Lulu',
      last_name: 'Goldmeyer',
      contact_info_id: 3,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/head.png"})
  );
};
