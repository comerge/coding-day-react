const faker = require("faker");

module.exports = () => {
  const data = {
    users: generateUsers(1000),
    teams: generateTeams(47),
    news: generateNews(64)
  };
  return data;
};

function generateUsers(amount) {
  const users = [];
  for (let i = 0; i < amount; i++) {
    const name = faker.name.findName();
    const userName = name.toLowerCase().replace(/\s/g, "_");
    const user = {
      id: i + 1,
      name,
      userName,
      email: `${userName}@codingday.com`,
      title: faker.random.boolean() ? faker.name.jobTitle() : undefined,
      avatar: faker.internet.avatar(),
      birthdate: faker.date.between("1970-01-01", "2000-12-12"),
      country: faker.address.country(),
      phone: faker.phone.phoneNumber(),
      active: faker.random.boolean(),
      description: faker.random.boolean() ? faker.lorem.sentences() : undefined
    };
    users.push(user);
  }
  return users;
}

function generateTeams(amount) {
  const teams = [];
  for (let i = 0; i < amount; i++) {
    const team = {
      id: i + 1,
      name: faker.company.companyName(),
      description: faker.random.boolean() ? faker.company.bs() : undefined,
      avatar: faker.image.image(),
      members: generateUsers(faker.random.number(30))
    };
    teams.push(team);
  }
  return teams;
}

function generateNews(amount) {
  const newsPosts = [];
  for (let i = 0; i < amount; i++) {
    const newsPost = {
      id: i + 1,
      title: faker.random.words(),
      timestamp: faker.date.recent(50),
      message: faker.lorem.paragraphs(),
      icon: faker.image.image(),
      author: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      }
    };
    newsPosts.push(newsPost);
  }
  return newsPosts;
}
