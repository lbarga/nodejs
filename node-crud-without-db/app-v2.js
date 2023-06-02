const express = require("express");
const { faker } = require("@faker-js/faker");
const cors = require("cors");

const app = express();

app.use(cors());

const hostname = "localhost";
const port = 3001;

const users = [];

for (let i = 0; i < 100; i++) {
  users.push({
    id: i + 1,
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  });
}

app.use(express.json());

app.get("/users", (req, res) => {
  const usersIds = req.query.ids;

  let foundUsers = users;

  if (usersIds) {
    foundUsers = users.filter((user) => usersIds.includes(parseInt(user.id)));
  }

  res.send(foundUsers);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://${hostname}:${port}/`);
});
