import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();


import config from './config/key';


import mongoose from 'mongoose';
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connnected...'))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

import users from './routes/users';
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example Server listening on port ${PORT}!`)
});