import type { FastifyReply, FastifyRequest } from "fastify";
import { PropertiesRepository } from "@/database/repository/properties";
import {
	CreatePropertiesUseCase,
	type CreatePropertiesUseCaseRequest,
} from "@/use-cases/create-properties";

export async function create(request: FastifyRequest, reply: FastifyReply) {
	const repository = new PropertiesRepository();
	const useCase = new CreatePropertiesUseCase(repository);

	const response = await useCase.execute(
		request.body as CreatePropertiesUseCaseRequest,
	);

	return reply.status(201).send(response);
}
