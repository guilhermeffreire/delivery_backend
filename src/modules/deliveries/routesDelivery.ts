import { Router } from "express";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";

const routesDelivery = Router();

const createDeliveryController = new CreateDeliveryController();

routesDelivery.post(
  "/delivery/",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

export { routesDelivery };
