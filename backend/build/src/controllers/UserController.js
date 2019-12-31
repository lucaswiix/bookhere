"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class UserController {
    constructor() {
        this.path = "/user";
        this.router = express_1.default.Router();
        this.getAll = (req, res) => {
            return res.json({
                status: "ok"
            });
        };
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.get(`${this.path}`, this.getAll);
    }
}
exports.default = UserController;
