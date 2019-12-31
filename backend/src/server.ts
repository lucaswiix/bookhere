import App from "./app";
import UserController from "./controllers/UserController";
import BookController from "./controllers/BookController";
import AuthController from "./controllers/AuthController";
// import validateEnv from './utils/validateEnv';

require("dotenv").config();

const app = new App([new AuthController(), new UserController(), new BookController()]);

app.listen();
