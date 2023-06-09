const db = require('../config/connection');
const { User, Twit, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const twitSeeds = require('./twitSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const mongoose = require('mongoose');

db.once('open', async () => {
  try {
    await Comment.deleteMany({});
    await Twit.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    const dbUsers = await User.find({});
    const userIds = dbUsers.map((dbUser) => dbUser._id);
    const usernames = dbUsers.map((dbUser) => dbUser.username);

    for (let i = 0; i < twitSeeds.length; i++) {
      const randomIndex = Math.floor(Math.random() * userIds.length);
      const userId = userIds[randomIndex].toString();
      const username = usernames[randomIndex];
      const { _id } = await Twit.create({
        twitText: twitSeeds[i].twitText,
        userId: userId,
        username: username,
      });
      const user = await User.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(userId) },
        {
          $addToSet: {
            twits: _id,
          },
        }
      );
    }

    const dbTwits = await Twit.find({}, '_id');
    const twitIds = dbTwits.map((dbTwit) => dbTwit._id);

    for (let i = 0; i < commentSeeds.length; i++) {
      const randomIndex = Math.floor(Math.random() * userIds.length);
      const userId = userIds[randomIndex].toString();
      const username = usernames[randomIndex];
      const twitId =
        twitIds[Math.floor(Math.random() * twitIds.length)].toString();
      const { _id } = await Comment.create({
        commentText: commentSeeds[i].commentText,
        userId: userId,
        twitId: twitId,
        username: username,
      });
      const twit = await Twit.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(twitId) },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
