import type { FastifyReply, FastifyRequest } from "fastify";
import {
	CreatePropertiesUseCase,
	type CreatePropertiesUseCaseRequest,
} from "@/use-cases/create-properties";

export async function create(request: FastifyRequest, reply: FastifyReply) {
	// TODO validar os dados de create das properties
	const useCase = new CreatePropertiesUseCase();

	const response = await useCase.execute(
		request.body as CreatePropertiesUseCaseRequest,
	);

	return reply.status(201).send(response);
}
