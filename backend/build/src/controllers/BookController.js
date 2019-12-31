"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class BookController {
    constructor() {
        this.path = "/book";
        this.router = express_1.default.Router();
        this.getAll = (req, res) => {
            return res.json({
                status: "sent"
            });
        };
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.get(this.path, this.getAll);
    }
}
exports.default = BookController;
