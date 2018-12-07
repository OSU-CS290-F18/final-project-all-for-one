import { Request} from 'express';
import { ResponseContext , LeaderBoardModel } from '../../app';
import mongoose from 'mongoose';

export interface Entry {
  Username: String,
  Score: number,
  Date: Date,
  Time: number
}

export const handler = async (req: Request, res: ResponseContext) => {
  let entries: string = '';
  await mongoose.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
  await LeaderBoardModel.remove({Username: req.query.user}, (err) => {
    if (err) throw err;
} )
res.send('Bokay');
};

export const RemEntry = handler;