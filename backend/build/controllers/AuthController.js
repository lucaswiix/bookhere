"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel = require('../../models/users');
const tokenModel = require('../../models/tokens');
class AuthController {
    constructor() {
        this.path = "/auth";
        this.router = express_1.default.router();
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.post(`${this.path}/login`, this.Login);
        this.router.post(`${this.path}/signup`, this.Signup);
    }
    Login(req, res) {
    }
    Signup(req, res) {
    }
}
exports.default = AuthController;
