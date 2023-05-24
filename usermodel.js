const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true?
  },
  email: {
    type: String,
    required: true,
    // unique: true,
//     validate: {
//       validator: function(value) {
//         // Custom email validation logic
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//       },
//       message: 'Invalid email address'
//     }
//   }
  }});

UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

UserSchema.path('email').validate(async (email) => {
    // check if email have a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // exmple email : mailto:johandoe@gmail.com
    const validEmail = emailRegex.test(email);
    if (!validEmail) {
        return false;
    }
})

// method to uniquely identify user

UserSchema.statics.getUser = async function (id) {
    return await this.findById(id);
}

//search users

UserSchema.statics.searchUser = async function (username) {
    return await this.find({
        username: {
            $regex: username,
            $options: 'i'
        }
    });
}


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
