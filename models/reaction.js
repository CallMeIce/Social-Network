const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Type.ObjectId },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: timeStamp => dateFormat(timeStamp) },
    toJSON: { getters: true, }, id: false,
});

module.exports = reactionSchema;