"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(controllers) {
        this.app = express_1.default();
        this.initializeControllers(controllers);
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }
    initializeControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use("/", controller.router);
        });
    }
}
exports.default = App;
