import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "oat",
    lastName: "man",
    email: "oatmanism@gmail.com",
    password: "$2b$10$E3DVB945RNmCQfaFKjuTJuE1GaJCcJnxhbGQveYOwk1D8E/dT09kq",
    picturePath: "oat.png",
    friends: [],
    location: "Casablanca, MA",
    occupation: "Web developer",
    birthday: "1987",
    gender: "male",
    viewedProfile: 20,
    impressions: 8117,
    createdAt: 1595588052,
    updatedAt: 1595599072,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "homer",
    lastName: "simpson",
    email: "homersimpson@gmail.com",
    password: "$2b$10$E3DVB945RNmCQfaFKjuTJuE1GaJCcJnxhbGQveYOwk1D8E/dT09kq",
    picturePath: "homer.png",
    friends: [],
    location: "Springfield, US",
    occupation: "Nuclear Safty Inspector",
    birthday: "1957",
    gender: "male",
    viewedProfile: 2580,
    impressions: 8117,
    createdAt: 1595588052,
    updatedAt: 1595599072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "margge",
    lastName: "simpson",
    email: "marggesimpson@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "margge.png",
    friends: [],
    location: "Springfield, US",
    occupation: "Data Scientist Hacker",
    birthday: "1967",
    gender: "female",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "maggie",
    lastName: "simpson",
    email: "maggiesimpson@gmail.com",
    password: "$2b$10$E3DVB945RNmCQfaFKjuTJuE1GaJCcJnxhbGQveYOwk1D8E/dT09kq",
    picturePath: "maggie.png",
    friends: [],
    location: "Springfield, US",
    occupation: "Educator",
    birthday: "1990",
    gender: "female",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "bart",
    lastName: "simpson",
    email: "bartsimpson@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "bart.png",
    friends: [],
    location: "Springfield, US",
    occupation: "Hacker",
    birthday: "1887",
    gender: "male",
    viewedProfile: 4212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "lisa",
    lastName: "simpson",
    email: "lisasimpson@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "lisa.png",
    friends: [],
    location: "Springfield, US",
    occupation: "Journalist",
    birthday: "1989",
    gender: "female",
    viewedProfile: 9766,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "abe",
    lastName: "simpson",
    email: "abesimpson@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "abe.png",
    friends: [],
    location: "Springfield, US",
    occupation: "Veteran",
    birthday: "1907",
    gender: "male",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "mona",
    lastName: "simpson",
    email: "monasimpson@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "mona.png",
    friends: [],
    location: "Washington, DC",
    occupation: "Scientist",
    birthday: "1930",
    gender: "male",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "oat",
    lastName: "man",
    location: "Casablanca, MA",
    description: "Some really long random description",
    picturePath: "oatpost1.jpeg",
    userPicturePath: "oat.png",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "random comment",
        createdAt: 1642716557
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "another random comment",
        createdAt: 1642719957
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "yet another random comment",
        createdAt: 1647916557
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "maggy",
    lastName: "simpson",
    location: "Springfield, US",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "maggypost2.jpeg",
    userPicturePath: "maggy.png",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "random comment",
        createdAt: 1642716557
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "another random comment",
        createdAt: 1642719957
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "yet another random comment",
        createdAt: 1647916557
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "bart",
    lastName: "simpson",
    location: "Springfield, US",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "bartpost3.jpeg",
    userPicturePath: "bart.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "random comment",
        createdAt: 1642716557
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "another random comment",
        createdAt: 1642719957
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "yet another random comment",
        createdAt: 1647916557
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "lisa",
    lastName: "simpson",
    location: "Springfield, US",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "lisapost4.jpeg",
    userPicturePath: "lisa.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "I lied again, one more random comment",
        createdAt: 1642716557
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "Why am I doing this?",
        createdAt: 1642719957
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "All I want to do is play video games",
        createdAt: 1647916557
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Abe",
    lastName: "Simpson",
    location: "Springfield, US",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "abepost5.jpeg",
    userPicturePath: "abe.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "I lied again, one more random comment",
        createdAt: 1642716557
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "Why am I doing this?",
        createdAt: 1642719957
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "All I want to do is play video games",
        createdAt: 1647916557
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "mona",
    lastName: "simpson",
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "monapost6.jpeg",
    userPicturePath: "mona.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "I lied again, one more random comment",
        createdAt: 1642716557
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "Why am I doing this?",
        createdAt: 1642719957
      },
      {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[0],
        commentText: "All I want to do is play video games",
        createdAt: 1647916557
      },
    ],
  },
];
