import { Router } from 'express';
import { getEntry } from './GetEntries';
import { addEntry } from './AddEntry';
import { initDb } from './initDb';
const router: Router = Router();

router.get('/getEntries/', getEntry);
router.post('/addEntry/', addEntry);
router.get('/init/', initDb)

export { router };