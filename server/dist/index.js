"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
const key_1 = __importDefault(require("./config/key"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(key_1.default.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connnected...'))
    .catch(err => console.log(err));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cookie_parser_1.default());
const users_1 = __importDefault(require("./routes/users"));
app.use('/api/users', users_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example Server listening on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map