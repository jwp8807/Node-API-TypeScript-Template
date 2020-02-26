import "dotenv/config";
import App from "./app";
import TestController from "./controllers/test.controller";

const app: App = new App([
    new TestController()
], 3000);

app.listen();