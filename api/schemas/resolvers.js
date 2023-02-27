const { User, Encounter, Comment } = require("../models");
const { AuthenticationError } = require('@apollo/server');
const { signToken } = require("../utils/auth");
const { sign } = require("jsonwebtoken");
const mongoose = require('mongoose');


const resolvers = {
  Query: {
    me: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    users: async () => {
      return User.find().populate(["encounters", "comments", "friends"]);
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate(["encounters", "comments", "friends"]);
    },
    singleUser: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
    allEncounters: async () => {
      return Encounter.find().populate(["userId", "commentId"]);
    },
    encounters: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Encounter.find(params)
        .sort({ createdAt: -1 })
        .populate(["userId", "commentId"]);
    },
    encounter: async (parent, { encounterId }) => {
      return Encounter.findOne({ _id: encounterId }).populate([
        "userId",
        "commentId",
      ]);
    },
    visEncounters: async (parent, { lowlat, hilat, lowlng, hilng }) => {
      return Encounter.find({
        $and: [
          { lat: { $gte: lowlat, $lte: hilat } },
          { lng: { $gte: lowlng, $lte: hilng } },
        ],
      }).populate(["userId", "commentId"]);
    },
    encounterComments: async (parent, { encounterId }) => {
      return Comment.find({ encounterId: encounterId })
        .populate("userId")
        .sort({ createdAt: -1 });
    },
    userComments: async (parent, { userId }) => {
      return Comment.find({ userId: userId })
        .populate(["userId", "encounterId"])
        .sort({ createdAt: -1 });
    },
    allComments: async () => {
      return Comment.find()
        .populate(["userId", "encounterId"])
        .sort({ createdAt: -1 });
    },
    oneComment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    friendsEncounters: async(parent, {userId}) => {
      const agg = [
        {
          '$match': { '_id': mongoose.Types.ObjectId(userId)},
        },
        {
          '$graphLookup': {
            'from': 'encounters',
            'startWith': '$friends',
            'connectFromField': 'friends',
            'connectToField': 'userId',
            'as': 'Friends_Encounters',
            'maxDepth': 3,
            'depthField': 'encounters',
            'restrictSearchWithMatch': {},
          },
        },
        {
          '$project': {
            'username': 1,
            'Friends_Encounters.date': 1,
            'Friends_Encounters.encounterUser': 1,
            'Friends_Encounters.category': 1,
            'Friends_Encounters.description': 1,
            'Friends_Encounters.title': 1,
            'Friends_Encounters.encType': 1,
          },
        },
        {
          '$unwind': {
            'path': '$Friends_Encounters'
          },
        },
        {
          '$limit':5
        },
        {
          '$sort': { 'Friends_Encounters.date': -1 },
        },
        {
          '$group': {
            '_id': '$_id',
            'username': { '$first': '$username' },
            'Friends_Encounters': { '$push': '$Friends_Encounters' },
          },
        }
      ];
      const cursor = User.aggregate(agg);
      const result = await cursor.exec();

      const mappedResult = {
        _id: result[0]._id,
        username: result[0].username,
        Friends_Encounters: result[0].Friends_Encounters
      }
      return mappedResult;
      
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {

      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      const badAttempt = "Email or password has failed, please try again!";

      if (!user) {
        console.log("bad user", user);
        throw new AuthenticationError(badAttempt);
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        console.log("bad password", user);
        throw new AuthenticationError(badAttempt);
      }

      const token = signToken(user);

      return { token, user };
    },

    saveEncounter: async (
      parent,
      {
        encounterUser,
        title,
        description,
        encType,
        category,
        date,
        lat,
        lng,
        userId
      }
    ) => {
      const encounter = await Encounter.create({
        encounterUser,
        title,
        description,
        encType,
        category,
        date,
        lat,
        lng,
        userId
      });

      await User.findOneAndUpdate(
        { username: encounterUser },
        { $addToSet: { encounters: encounter._id } }
      );
      return encounter;
    },
    removeEncounter: async (parent, { encounterId }) => {
      await Comment.deleteMany({ encounterId: encounterId });
      await Encounter.findOneAndDelete({ _id: encounterId });
      return Encounter;
    },
    saveComment: async (
      parent,
      { commentText, commentUser, encounterId, userId }
    ) => {
      const comment = await Comment.create({
        commentText,
        commentUser,
        encounterId,
        userId,
      });
      await Encounter.findOneAndUpdate(
        { _id: encounterId },
        { $addToSet: { commentId: comment._id } }
      );
      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { comments: comment._id } }
      );
      console.log("this is the comment on the backend", comment);
      return comment;
    },
    corroborateEncounter: async (parent, { encounterId, userId }) => {
      const encounter = await Encounter.findOneAndUpdate(
        { _id: encounterId },
        { $addToSet: { corroborations: userId } }
      );
      return encounter;
    },
    corroborateComment: async (parent, { commentId, userId }) => {
      const comment = await Comment.findOneAndUpdate(
        { _id: commentId },
        { $addToSet: { corroborations: userId } }
      );
      return comment;
    },
  },
};

module.exports = resolvers;
