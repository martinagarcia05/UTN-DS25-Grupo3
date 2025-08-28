"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
const express_1 = require("express");
function handleError(err, req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ❌ Error:`, err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: 'Internal server error',
        message: err.message,
        timestamp
    });
}
//# sourceMappingURL=error.middleware.js.map