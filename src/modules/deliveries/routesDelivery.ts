import { Router } from "express";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";
import { FindAllAvailableController } from "./useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "../../middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./useCases/updateEndDate/UpdateEndDateController";

const routesDelivery = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndCaseController = new UpdateEndDateController();

routesDelivery.post(
  "/delivery/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

routesDelivery.get(
  "/delivery/available/",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

routesDelivery.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

routesDelivery.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndCaseController.handle
);

export { routesDelivery };
