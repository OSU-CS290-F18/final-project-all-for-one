"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetEntries_1 = require("./GetEntries");
const AddEntry_1 = require("./AddEntry");
const initDb_1 = require("./initDb");
const index_1 = require("./RemEntry/index");
const router = express_1.Router();
exports.router = router;
router.get('/getEntries', GetEntries_1.getEntry);
router.post('/addEntry/', AddEntry_1.addEntry);
router.get('/init/', initDb_1.initDb);
router.post('/remEntry/', index_1.RemEntry);
//# sourceMappingURL=index.js.map