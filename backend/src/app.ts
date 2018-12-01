import e ,{Request, Response, Application} from  'express';
import { router } from './routes';
import { NextFunction } from 'connect';

export interface ResponseContext extends Response {
  locals: Credentials;
}
export interface Credentials {
  url: string,
  dbName: string,
  user: string,
  pass: string
}
export class Server {
public app: Application;
public creds: Credentials  = {
  url: 'classmongo.engr.oregonstate.edu',
  dbName: 'cs290_hornee',
  user: 'cs290_hornee',
  pass: 'cs290_hornee'
}
constructor() {
this.app = e();

console.log('WHY');
  this.app.use( (req: Request, res: ResponseContext, next: NextFunction) => {
      res.locals = this.creds;
      next();
});
this.app.use('/api', router);
this.app.listen(8000);



}
}
const server = new Server();

