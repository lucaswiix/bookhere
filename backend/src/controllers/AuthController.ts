import express, { Request, Response } from 'express';
import Controller from '../interfaces/controller.interface';

export default class AuthController implements Controller {
    path: string = "/auth";
    router: any = express.Router();

    constructor(){
        this.initializeRouter();
    }

    private initializeRouter(){
        this.router.post(`${this.path}/login`, this.Login);
        this.router.post(`${this.path}/signup`, this.Signup);
    }

     private async Login(req: Request, res: Response){
    }

    private Signup(req: Request, res: Response){

    }


}