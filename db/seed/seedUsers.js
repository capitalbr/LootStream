const Users = require("../../models/users");

Users.create({
  username: 'testUser',
  displayName: 'testUser'
}).catch((err) => {
  console.log(err);
});


