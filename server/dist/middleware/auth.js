"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var auth = function (req, res, next) {
    var token = req.cookies.x_auth;
    User_1.User.findByToken(token, function (err, user) {
        if (err)
            throw err;
        if (!user)
            return res.json({ isAuth: false, error: true });
        req.token = token;
        req.user = user;
        next();
    });
};
module.exports = { auth: auth };
//# sourceMappingURL=auth.js.map