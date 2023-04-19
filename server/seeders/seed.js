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

    const dbUsers = await User.find({}, '_id')
    const userIds = dbUsers.map(dbUser => dbUser._id);

    for (let i = 0; i < twitSeeds.length; i++) {
      const userId = userIds[Math.floor(Math.random() * userIds.length)].toString()
      console.log(userId)
      const { _id } = await Twit.create({ twitText: twitSeeds[i].twitText, userId: userId  } );
      const user = await User.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(userId) },
        {
          $addToSet: {
            twits: _id,
          },
        }
      );
    }

    // for (let i = 0; i < commentSeeds.length; i++) {
    //   const { _id, twitId } = await Comment.create(commentSeeds[i]);
    //   const twit = await Twit.findOneAndUpdate(
    //     { _id: new mongoose.Types.ObjectId(twitId) },
    //     {
    //       $addToSet: {
    //         comments: _id,
    //       },
    //     }
    //   );
    // }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
