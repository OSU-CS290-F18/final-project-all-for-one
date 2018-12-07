"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const mongoose_1 = __importDefault(require("mongoose"));
exports.handler = async (req, res) => {
    let entries = '';
    await mongoose_1.default.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
    await app_1.LeaderBoardModel.remove({ Username: req.query.user }, (err) => {
        if (err)
            throw err;
    });
    res.send('Bokay');
};
exports.RemEntry = exports.handler;
//# sourceMappingURL=index.js.map