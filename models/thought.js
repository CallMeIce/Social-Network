const mongoose = require('mongoose');
const reactionSchema = require('./reaction')

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: timeStamp => dateFormat(timeStamp) },
    username: { type: String, required: true },
    reactions: [reactionSchema],
    lastAccessed: { type: Date, default: Date.now },
});

// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema.virtual('getReaction')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const thought = model('thought', thoughtSchema);


module.exports = thought;
