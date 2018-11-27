import { MongoClient, Db, Collection, InsertWriteOpResult } from 'mongodb';
export interface IDbClient {
    uri: string;
    dbName: string;
    connect(): Promise<void>;
    close(): Promise<void>;
    insert(documents: any): Promise<InsertWriteOpResult>;
    
}  
export interface IDbClientOptions {
    url: string;
    port?: number;
    dbName: string;
  }

export class DbClient implements IDbClient {
    public uri: string;
    public dbName: string;
    public client?: MongoClient;
    public db?: Db;
  
    constructor(args: IDbClientOptions) {
      this.uri = args.url;
      this.dbName = args.dbName;
    }

   public async connect(): Promise<void> {
      const user = 'cs290_hornee';
          const password = 'cs290_hornee';
  
      try {
        this.client = await MongoClient.connect(
          this.uri,
          {
            auth: { user, password }
          }
        );
        this.db = this.client.db(this.dbName);
        console.log('Connected');
      } catch (err) {
        throw err;
      }
      
    }
      public async insert(documents: any): Promise<InsertWriteOpResult> {
        let result: InsertWriteOpResult;
        if (this.db) {
          try {
            // tslint:disable-next-line:no-any
            const collections: Collection<any>[] = await this.db.collections();
            if (collections && collections.find(collection => collection.collectionName === 'leaderboard')) {
              await this.db.dropCollection('leaderboard');
            }
            await this.db.createCollection('leaderboard');
            result = await this.db.collection('leaderboard').insertMany(documents);
          } catch (err) {
            throw err;
          }
          return result;
        } else {
          throw new Error('db is not defined');
        }
      }
      public async close(): Promise<void> {
        if (this.client) {
          try {
            await this.client.close();
          } catch (err) {
            throw new Error('error occured closing client');
          }
        } else {
          throw new Error('client is already closed');
        }
      }
    

    }