"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = logRequest;
const express_1 = require("express");
function logRequest(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map