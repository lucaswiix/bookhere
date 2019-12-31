"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const BookController_1 = __importDefault(require("./controllers/BookController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
// import validateEnv from './utils/validateEnv';
require("dotenv").config();
const app = new app_1.default([new AuthController_1.default(), new UserController_1.default(), new BookController_1.default()]);
app.listen();
