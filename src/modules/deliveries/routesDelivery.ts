import { Router } from "express";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";

const routesDelivery = Router();

const createDeliveryController = new CreateDeliveryController();

routesDelivery.post("/delivery/", createDeliveryController.handle);

export { routesDelivery };
