import { User } from '../models/User';

let auth = (req: Request, res: Response, next) => {

    let token = req.cookies.x_auth;

    User.findByToken(token, (err: Error, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });

        req.token = token;
        req.user = user;
        next();
    });
};

module.exports = { auth };