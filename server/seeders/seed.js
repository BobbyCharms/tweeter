const db = require('../config/connection');
const { User, Twit, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const twitSeeds = require('./twitSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const mongoose = require('mongoose')

db.once('open', async () => {
  try {
    await Comment.deleteMany({})
    await Twit.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < twitSeeds.length; i++) {
      const { _id, userId } = await Twit.create(twitSeeds[i]);
      const user = await User.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(userId) },
        {
          $addToSet: {
            twits: _id,
          },
        }
      );
    }

    for (let i = 0; i < commentSeeds.length; i++) {
      const { _id, twitId } = await Comment.create(commentSeeds[i]);
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
