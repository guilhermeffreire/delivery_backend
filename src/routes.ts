import { Router } from "express";
import { routesAuthenticate } from "./modules/account/routesAuthenticate";
import { routesDeliveryman } from "./modules/deliveryman/routesDeliveryman";
import { routesClient } from "./modules/clients/routesClients";
import { routesDelivery } from "./modules/deliveries/routesDelivery";

const routes = Router();

routes.use(routesDelivery);
routes.use(routesAuthenticate);
routes.use(routesDeliveryman);
routes.use(routesClient);

export { routes };
