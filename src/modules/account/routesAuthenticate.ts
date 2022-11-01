import { Router } from "express";

import { AuthenticateDeliverymanController } from "./authenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./authenticateClient/AuthenticateClienteController";

const routesAuthenticate = Router();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();

routesAuthenticate.post(
  "/deliveryman/authenticate/",
  authenticateDeliverymanController.handle
);

routesAuthenticate.post(
  "/client/authenticate/",
  authenticateClientController.handle
);

export { routesAuthenticate };
