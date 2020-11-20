// const faker = require("faker");
// const connection = require("./connection");
// const { Types } = require("mongoose");
// const { User, Posts, Comments } = require("./schema");

// const users = new Array(50).fill().map(() => ({
//   _id: Types.ObjectId(),
//   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//   email: faker.internet.email(),
//   password_digest: faker.random.word(),
// }));
// const comments = new Array(500).fill().map(() => ({
//   _id: Types.ObjectId(),
//   comment: faker.lorem.sentences(),
//   user_id: users[Math.floor(Math.random() * users.length)]._id,
// }));
// const posts = new Array(100).fill().map(() => ({
//   _id: Types.ObjectId(),
//   image: faker.random.image(),
//   caption: faker.lorem.paragraph(),
//   comments: comments
//     .slice(
//       Math.floor(Math.random() * comments.length),
//       Math.floor(Math.random() * comments.length)
//     )
//     .map((c) => c._id),
//   user_id: users[Math.floor(Math.random() * users.length)]._id,
// }));

// const seed = async () => {
//   await connection.connect;
//   await User.insertMany(users);
//   await Posts.insertMany(posts);
//   await Comments.insertMany(comments);
//   await connection.disconnect;
//   process.exit();
// };

// seed();
