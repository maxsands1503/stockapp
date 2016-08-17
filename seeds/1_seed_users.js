
exports.seed = function(knex, Promise) {
  return knex("users").del()
  .then(function () {
    return Promise.all([
      knex('users')
      .insert({userName: 'alex123', user_first: 'Alex', user_last: 'James', email: 'fake@fake.com' , password: '$2a$04$ORUDiAlmvnu29MtwOI.11.gMcX8x26lCVX3vKTEPmtH92qHptmUS.'}),
      knex('users')
      .insert({userName: 'max123', user_first: 'Alex', user_last: 'Sands', email: 'fake1@fake.com', password: '$2a$04$HlTKW.KnyhFOuGTCrskA5uc0z47bS3kXD5T9QzucQW.vNzjYk8i/2'}),
      knex('users')
      .insert({userName: 'doc123', user_first: 'Doc', user_last: 'Brown', email: 'fake12@fake.com', password: '$2a$04$opPVAcKyec2Q0RvbcYngY.0fLjVumMghpEBnbAX3Ace2UHZKwxQvq'})
        ]);
      })
}
