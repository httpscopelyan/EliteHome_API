import fastify from "fastify";
import { baseRoutes } from "./controller/base/routes.js";
import { propertiesRoutes } from "./controller/properties/routes.js";

export const app = fastify();

app.register(propertiesRoutes);
app.register(baseRoutes)

// TODO criar um HANDLER global de erros
