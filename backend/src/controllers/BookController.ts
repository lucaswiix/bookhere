import express, { Request, Response } from "express";
import Controller from "../interfaces/controller.interface";

class BookController implements Controller {
  public path = "/book";
  public router = express.Router();

  constructor() {
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(this.path, this.getAll);
  }

  private getAll = (req: Request, res: Response) => {
    return res.json({
      status: "sent"
    });
  };
}

export default BookController;
