"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("../../app");
exports.handler = async (req, res) => {
    await mongoose_1.default.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
    const temp = new app_1.LeaderBoardModel({ Username: req.query.user, Score: req.query.score, Date: Date.now(), Time: req.query.time });
    await temp.save();
    res.send("Added: " + temp);
};
exports.addEntry = exports.handler;
//# sourceMappingURL=index.js.map