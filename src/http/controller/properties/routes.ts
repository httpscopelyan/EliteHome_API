import type { FastifyInstance } from "fastify";
import type { Properties } from "@/entities/properties";
import { create } from "./create";
import { list } from "./list";

export const properties: Properties[] = [];

export async function propertiesRoutes(app: FastifyInstance) {
	app.post("/properties", create);
	app.get("/properties", list)
}
