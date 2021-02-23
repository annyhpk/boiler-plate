import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
const saltRounds = 10;
import jwt from 'jsonwebtoken';
import { UserDocument } from './UserTypes';



const userSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 500,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.get('password'), salt, function (err, hash) {
        if (err) return next(err);

        user.set('password', hash);
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.get('password'), function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;

  var token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.set('token', token);
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, 'secretToken', function (err: any, decoded: any) {
    user.findOne({ _id: decoded, token: token }, function (err: any, user: string) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = model<UserDocument>('User', userSchema);

export default User;
