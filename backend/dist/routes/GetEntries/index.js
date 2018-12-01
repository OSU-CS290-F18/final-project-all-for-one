"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.handler = async (req, res) => {
    await mongoose_1.default.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
    res.send("good");
};
exports.getEntry = exports.handler;
//# sourceMappingURL=index.js.map