"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class DbClient {
    constructor(args) {
        this.uri = args.url;
        this.dbName = args.dbName;
    }
    async connect() {
        const user = 'cs290_hornee';
        const password = 'cs290_hornee';
        try {
            this.client = await mongodb_1.MongoClient.connect(this.uri, {
                auth: { user, password }
            });
            this.db = this.client.db(this.dbName);
            console.log('Connected');
        }
        catch (err) {
            throw err;
        }
    }
    async insert(documents) {
        let result;
        if (this.db) {
            try {
                // tslint:disable-next-line:no-any
                const collections = await this.db.collections();
                if (collections && collections.find(collection => collection.collectionName === 'leaderboard')) {
                    await this.db.dropCollection('leaderboard');
                }
                await this.db.createCollection('leaderboard');
                result = await this.db.collection('leaderboard').insertMany(documents);
            }
            catch (err) {
                throw err;
            }
            return result;
        }
        else {
            throw new Error('db is not defined');
        }
    }
    async close() {
        if (this.client) {
            try {
                await this.client.close();
            }
            catch (err) {
                throw new Error('error occured closing client');
            }
        }
        else {
            throw new Error('client is already closed');
        }
    }
}
exports.DbClient = DbClient;
//# sourceMappingURL=index.js.map