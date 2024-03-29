const {Schema, model, Types } = require('mongoose')


var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true, validate: [validateEmail, 'Please fill a valid email address'] },
    thought: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }]},
    {toJSON: { virtuals: true }, id: false},
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
userSchema.virtual('getFriend')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our Application model
const User = model('user', userSchema);
console.log(User);

module.exports = User;