
exports.seed = function(knex, Promise) {
  return knex('stocks').del()
    .then(function () {
      return Promise.all([
        knex('stocks').insert({user_id: 1, ticker: 'GOOG', owned: 100, avgPrice: 700.36}),
        knex('stocks').insert({user_id: 2, ticker: 'AAPL', owned: 100, avgPrice: 110.46}),
        knex('stocks').insert({user_id: 3, ticker: 'GE', owned: 100, avgPrice: 30.36})
      ]);
    });
};
