import { Router } from "express";
import { CreateDeliverymanController } from "./useCases/createDeliveryman/CreateDeliverymanController";
import { ensureAuthenticateDeliveryman } from "../../middlewares/ensureAuthenticateDeliveryman";
import { FindAllDeliveriesDeliverymanController } from "./useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routesDeliveryman = Router();

const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

routesDeliveryman.post("/deliveryman/", createDeliverymanController.handle);

routesDeliveryman.get(
  "/deliveryman/deliveries/",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

export { routesDeliveryman };
