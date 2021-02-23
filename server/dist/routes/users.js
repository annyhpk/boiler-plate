"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const User_1 = require("../models/User");
const auth_1 = require("../middleware/auth");
//=================================
//             User
//=================================
router.post('/register', (req, res) => {
    const user = new User_1.User(req.body);
    user.save((err, doc) => {
        if (err)
            return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});
router.post('/login', (req, res) => {
    User_1.User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.json({
                loginSuccess: false,
                message: "에러 발생",
                err
            });
        }
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                });
            }
            user.generateToken((err, user) => {
                if (err)
                    return res.status(400).send(err);
                return res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
});
router.get('/auth', auth_1.auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
});
router.get('/logout', auth_1.auth, (req, res) => {
    User_1.User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
        if (err)
            return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});
module.exports = router;
//# sourceMappingURL=users.js.map