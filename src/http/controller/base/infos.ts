import type { FastifyReply, FastifyRequest } from "fastify";

import { AppInfoUseCases } from "@/use-cases/app-info";

export async function info(_request: FastifyRequest, reply: FastifyReply) {

	const useCase = new AppInfoUseCases();
	const response = useCase.execute();

	return reply.status(200).send(response);
}
