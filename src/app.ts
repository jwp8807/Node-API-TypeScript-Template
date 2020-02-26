import bodyParser = require("body-parser");
import express from "express";
import BaseController from "./controllers/base.controller";

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: BaseController[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Start API listening on port ${this.port}`);
        });
    }

    private initializeControllers(controllers: BaseController[]): void {
        controllers.forEach(controller => {
            this.app.use("/", controller.router);
        });
    }

    private initializeMiddleware(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default App;