"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var saltRounds = 10;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userSchema = new mongoose_1.Schema({
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
    var user = this;
    if (user.isModified('password')) {
        bcrypt_1.default.genSalt(saltRounds, function (err, salt) {
            if (err)
                return next(err);
            bcrypt_1.default.hash(user.get('password'), salt, function (err, hash) {
                if (err)
                    return next(err);
                user.set('password', hash);
                next();
            });
        });
    }
    else {
        next();
    }
});
userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt_1.default.compare(plainPassword, this.get('password'), function (err, isMatch) {
        if (err)
            return cb(err);
        cb(null, isMatch);
    });
};
userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jsonwebtoken_1.default.sign(user._id.toHexString(), 'secretToken');
    user.set('token', token);
    user.save(function (err, user) {
        if (err)
            return cb(err);
        cb(null, user);
    });
};
userSchema.statics.findByToken = function (token, cb) {
    var user = this;
    jsonwebtoken_1.default.verify(token, 'secretToken', function (err, decoded) {
        user.findOne({ _id: decoded, token: token }, function (err, user) {
            if (err)
                return cb(err);
            cb(null, user);
        });
    });
};
var User = mongoose_1.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map