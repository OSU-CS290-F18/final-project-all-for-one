import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { LeaderBoardModel } from '../../app';

export const handler = async (req: Request, res: Response) => {
    await mongoose.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
    const temp = new LeaderBoardModel({Username: req.query.user, Score: req.query.score, Date: Date.now(), Time: req.query.time});
    await temp.save();
    res.send("Added: " + temp);
};

export const addEntry = handler;