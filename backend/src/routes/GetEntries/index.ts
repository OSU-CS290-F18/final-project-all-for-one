import { Request} from 'express';
import { ResponseContext } from '../../app';

export const handler = async (req: Request, res: ResponseContext) => {
  await res.locals.connect();
  res.send("Hey dude");
};

export const getEntry = handler;