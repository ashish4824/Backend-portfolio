"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./router/Routes"));
const db_1 = __importDefault(require("./Db/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.urlencoded({ extended: true }));
// Database connection
(0, db_1.default)()
    .then(() => {
    console.log("Successfully connected to MongoDB");
    // Routes
    app.use("/api/v1", Routes_1.default);
    // Test endpoint
    app.get('/test', (req, res) => {
        res.status(200).json({
            message: 'Welcome to TypeScript Express Server!',
            environment: process.env.NODE_ENV
        });
    });
    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ error: "Something went wrong!" });
    });
    // Start server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
});
