"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const DbClient_1 = require("./dal/DbClient");
class Server {
    constructor() {
        this.clientArgs = {
            url: 'mongodb://classmongo.engr.oregonstate.edu',
            dbName: 'cs290_hornee'
        };
        this.app = express_1.default();
        console.log('WHY');
        this.app.use((req, res, next) => {
            res.locals = new DbClient_1.DbClient(this.clientArgs);
            next();
        });
        this.app.use('/api', routes_1.router);
        this.app.listen(8000);
    }
}
exports.Server = Server;
const server = new Server();
//# sourceMappingURL=app.js.map