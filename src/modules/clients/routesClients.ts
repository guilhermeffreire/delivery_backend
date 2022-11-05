import { Router } from "express";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./useCases/deliveries/FindAllDeliveriesController";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";

const routesClient = Router();

const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

routesClient.post("/client/", createClientController.handle);

routesClient.get(
  "/client/deliveries/",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

export { routesClient };
