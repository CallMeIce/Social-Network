const reactionSchema = require('./reaction.js')
const { model, Schema, Types } = require('mongoose')

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: timeStamp => dateFormat(timeStamp) },
    username: { type: String, required: true },
    reactions: [reactionSchema]},
    // lastAccessed: { type: Date, default: Date.now },
    {toJSON: { getters: true, }, id: false},
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema.virtual('getReaction')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model('thought', thoughtSchema);


module.exports = Thought;