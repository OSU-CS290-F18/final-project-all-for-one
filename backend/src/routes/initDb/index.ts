import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { LeaderBoardModel } from '../../app';

export const handler = async (req: Request, res: Response) => {
    try {

    await mongoose.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
    const temp = new LeaderBoardModel({Username: 'beans', Score: Math.random() * (100 - 1) + 1, Date: Date.now(), Time: 60 });
LeaderBoardModel.deleteMany({}, () => console.log('we should be deleting here'));
await temp.save();
LeaderBoardModel.find({}, (err, entry) => {
    res.send(entry);
} )
    }
    catch (err) {
        throw err;
    }
};

export const initDb = handler;