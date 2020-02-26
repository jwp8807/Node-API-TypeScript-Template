import express from "express";

abstract class BaseController {
    public abstract path: string;
    public router = express.Router();
    abstract initializeRoutes(): void;
}

export default BaseController;