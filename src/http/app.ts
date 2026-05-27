import fastify from "fastify";
import { baseRoutes } from "./controller/base/route.js";

export const app = fastify();

app.register(baseRoutes);
