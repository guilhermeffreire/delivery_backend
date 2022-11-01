import { Router } from "express";
import { CreateDeliverymanController } from "./useCases/createDeliveryman/CreateDeliverymanController";

const routesDeliveryman = Router();

const createDeliverymanController = new CreateDeliverymanController();

routesDeliveryman.post("/deliveryman/", createDeliverymanController.handle);

export { routesDeliveryman };
