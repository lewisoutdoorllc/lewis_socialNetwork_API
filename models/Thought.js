// Thought.js

const { Schema, model } = require("mongoose");
const moment = require("moment");

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
        trim: true
      },
      username: {
        type: String,
        required: true,
        trim: true
      },
      createdAt: {
        type: Date,
        get: (createdAtVal) =>
        moment(createdAtVal).format("MMM Do YY [at] hh:mm a"),
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM Do YY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
      ref: 'User'
    },
    // use ReactionSchema to validate data for a reply
    reactions: [ReactionSchema],
  },
//   {
    // use ReplySchema to validate data for a reply
    // replies: [ReplySchema]
//   },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
  const Thought = model("Thought", ThoughtSchema);
  
  module.exports = Thought;
