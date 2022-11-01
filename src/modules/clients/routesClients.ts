import { Router } from "express";
import { CreateClientController } from "./useCases/createClient/CreateClientController";

const routesClient = Router();

const createClientController = new CreateClientController();

routesClient.post("/client/", createClientController.handle);

export { routesClient };
