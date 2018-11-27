import e ,{Request, Response, Application} from  'express';
import { router } from './routes';
import { MongoClient, Db, Collection, InsertWriteOpResult } from 'mongodb';
import { IDbClientOptions, DbClient } from './dal/DbClient';
import { request } from 'https';
import { NextFunction } from 'connect';

export interface ResponseContext extends Response {
  locals: DbClient;
}
export class Server {
public app: Application;
public clientArgs: IDbClientOptions  = {
  url: 'mongodb://classmongo.engr.oregonstate.edu',
  dbName: 'cs290_hornee'
}
constructor() {
this.app = e();

console.log('WHY');
  this.app.use( (req: Request, res: ResponseContext, next: NextFunction) => {
      res.locals = new DbClient(this.clientArgs);
      next();
});
this.app.use('/api', router);
this.app.listen(8000);



}
}
const server = new Server();

