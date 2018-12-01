import { Request} from 'express';
import { ResponseContext } from '../../app';
import mongoose, {ConnectionOptions} from 'mongoose';
export const handler = async (req: Request, res: ResponseContext) => {

  await mongoose.connect(`mongodb://${res.locals.user}:${res.locals.pass}@${res.locals.url}/${res.locals.dbName}`);
  res.send("good");
};

export const getEntry = handler;