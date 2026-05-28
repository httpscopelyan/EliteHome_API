import type { FastifyInstance } from "fastify";
import { info } from "./infos";

export function baseRoutes(app: FastifyInstance) {
	app.get("/", info);
}
