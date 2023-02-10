// const {connect, disconnect } = require('../../config/db.config');
const { User, Encounter, Comment } = require('../../models');
const userSeeds = require('./userSeeds.json');
const encounterSeeds = require('./encounterSeeds.json');
const { getUsers, getEncounters, getComments } = require('./seedutils/data');
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/daNGer_close_DB', 
);

const db = mongoose.connection


db.once('open', async () => {
  try {
    //clears our db at beginning
    await User.deleteMany({});
    await Encounter.deleteMany({});
    await Comment.deleteMany({});

    //creates users and encounters

    // let moreUsers = getUsers(10);
    let moreEncounters = getEncounters(20, 4);
    let moreComments = getComments(50, 3);

    await User.create(userSeeds);
    // await User.insertMany(moreUsers);
    await Encounter.create(encounterSeeds);
    await Encounter.insertMany(moreEncounters);
    await Comment.create(moreComments);

    //creates an array of users, encounters, and comments
    const users = await User.find({});
    const encounters = await Encounter.find({});
    const comments = await Comment.find({});

    //for loop to seed encounters into users
    for (let i = 0; i < encounters.length; i++) {
      const enc = encounters[i];
      const use = users[Math.floor(Math.random() * users.length)];
      await User.findOneAndUpdate(
        { _id: use._id },
        { $addToSet: { encounters: enc._id } }
      )
        .then((encounter) =>
          !encounter
            ? console.log('no encounter found')
            : Encounter.findOneAndUpdate(
                { _id: enc._id },
                { $set: { userId: use._id, encounterUser: use.username } }
              ).then((user) =>
                !user
                  ? console.log('no user found')
                  : console.log(`added encounter: ${enc.title}`)
              )
        )
        .catch((err) => console.log(err));
    }

    for (let j = 0; j < comments.length; j++) {
      const com = comments[j];
      const enc = encounters[Math.floor(Math.random() * encounters.length)];
      const use = users[Math.floor(Math.random() * users.length)];

      await User.findByIdAndUpdate(
        { _id: use._id },
        { $addToSet: { comments: com._id } }
      )
        .then((comment) =>
          !comment
            ? console.log('no comment found')
            : Comment.findOneAndUpdate(
                { _id: com._id },
                {
                  $set: {
                    userId: use._id,
                    commentUser: use.username,
                    encounterId: enc._id,
                  },
                }
              ).then((comment) =>
                !comment
                  ? console.log('no comment found 2')
                  : Encounter.findOneAndUpdate(
                      { _id: enc._id },
                      { $addToSet: { commentId: com._id } }
                    ).then((comment) =>
                      !comment
                        ? console.log('no comment found 3')
                        : console.log(`added comment: ${com.commentText}`)
                    )
              )
        )
        .catch((err) => console.log(err));
    }

    // for (let k = 0; k < users.length * 2; k++) {
    //   const use = users[Math.floor(Math.random() * users.length)];
    //   const friend = users[Math.floor(Math.random() * user.length)];
      

    //   await User.findByIdAndUpdate(
    //     { _id: use._id},
    //     { $addToSet: { friends: friend._id }}
    //   );

    //   await User.findByIdAndUpdate(
    //     { _id: friend._id },
    //     { $addToSet: { friends: use._id }}
    //   );
    // };

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
