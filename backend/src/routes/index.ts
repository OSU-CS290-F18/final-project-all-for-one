import { Router } from 'express';
import { getEntry } from './GetEntries';
import { addEntry } from './AddEntry';
import { initDb } from './initDb';
import { RemEntry } from './RemEntry/index';
const router: Router = Router();

router.get('/getEntries', getEntry);
router.post('/addEntry/', addEntry);
router.get('/init/', initDb);
router.post('/remEntry/', RemEntry);

export { router };