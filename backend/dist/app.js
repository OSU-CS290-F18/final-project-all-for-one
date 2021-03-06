"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.Entries = new Schema({
    Username: String,
    Score: Number,
    Date: Date,
    Time: Number
});
exports.LeaderBoardModel = mongoose_1.default.model('LeaderBoard', exports.Entries);
class Server {
    constructor() {
        this.creds = {
            url: 'classmongo.engr.oregonstate.edu',
            dbName: 'cs290_hornee',
            user: 'cs290_hornee',
            pass: 'cs290_hornee'
        };
        this.app = express_1.default();
        console.log('GUH');
        this.app.use((req, res, next) => {
            res.locals = this.creds;
            next();
        });
        this.app.use('/api', routes_1.router);
        this.app.listen(8000);
    }
}
exports.Server = Server;
const server = new Server();
//# sourceMappingURL=app.js.map