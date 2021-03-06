import express, {Request, Response} from "express";
import Controller from "../interfaces/controller.interface";

class UserController implements Controller {
  public path = "/user";
  public router = express.Router();

  constructor() {
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(`${this.path}`, this.getAll);
  }

  private getAll = (req: Request, res: Response) => {
    return res.json({
      status: "ok"
    });
  };
}

export default UserController;
