const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connnected...'))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send('Hello World'));

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

app.post("/login", (req,res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
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
        if (err) return res.status(400).send(err);
          
        return res.cookie("X_auth", user.token)
                  .status(200)
                  .json({ loginSuccess: true, userId: user._id });
      });
    });

  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));