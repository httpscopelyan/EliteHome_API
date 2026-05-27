import type { FastifyInstance } from "fastify";
import { info } from "./infos.js";

export async function baseRoutes(app: FastifyInstance) {
	app.get("/", info)
}
