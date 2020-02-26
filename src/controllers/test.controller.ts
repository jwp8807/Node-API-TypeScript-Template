import express = require("express");
import BaseController from "./base.controller";

class TestController extends BaseController {
    public path: string = "/test";
    constructor() {
        super();
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.testResponse);
    }

    public testResponse = async (req: express.Request, res: express.Response): Promise<express.Response> => {

        return res.json({
            "success" : true,
            "message": "NWO 4-Life"
        });
    }
}

export default TestController;
