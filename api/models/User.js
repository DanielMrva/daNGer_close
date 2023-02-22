const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const encounterSchema = require("./Encounter");
const commentSchema = require("./Comment");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // put in a match validation for email later
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    encounters: [
        {
            type: Schema.Types.ObjectId, //TODO: Change relationship many to one, RE: https://mongoosejs.com/docs/populate.html#populate-virtuals
            ref: "Encounter",
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId, //TODO: Change relationship many to one, RE: https://mongoosejs.com/docs/populate.html#populate-virtuals
            ref: "Comment",
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ]
});

userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    };

    next();
});
// Password check moved out of User and into Passport
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

const User = model("User", userSchema);

module.exports = User;