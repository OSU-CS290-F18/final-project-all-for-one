"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("../../app");
exports.handler = async (req, res) => {
    try {
        await mongoose_1.default.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
        const temp = new app_1.LeaderBoardModel({ Username: 'beans', Score: Math.random() * (100 - 1) + 1, Date: Date.now(), Time: 60 });
        app_1.LeaderBoardModel.deleteMany({}, () => console.log('we should be deleting here'));
        await temp.save();
        app_1.LeaderBoardModel.find({}, (err, entry) => {
            res.send(entry);
        });
    }
    catch (err) {
        throw err;
    }
};
exports.initDb = exports.handler;
//# sourceMappingURL=index.js.map