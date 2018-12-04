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
  await LeaderBoardModel.find({}, (err, entry) => {
    entries = JSON.stringify(entry);
} )
let parser: Entry[] = [];
JSON.parse(entries).forEach((entry: any) => {
parser.push({
  Username: entry.Username,
  Score: entry.Score,
  Date: entry.Date,
  Time: entry.Time
})
});
res.type('json');
parser.sort(function(a,b) {return (b.Score - a.Score)});
res.send(parser);
};

export const getEntry = handler;