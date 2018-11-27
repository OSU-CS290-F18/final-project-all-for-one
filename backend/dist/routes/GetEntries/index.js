"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = async (req, res) => {
    await res.locals.connect();
    res.send("Hey dude");
};
exports.getEntry = exports.handler;
//# sourceMappingURL=index.js.map