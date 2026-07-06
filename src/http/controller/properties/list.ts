import type { FastifyReply, FastifyRequest } from "fastify";
import { PropertiesRepository } from "@/database/repository/properties";
import { ListPropertiesUseCase } from "@/use-cases/list-properties";


export async function list(_request: FastifyRequest, reply: FastifyReply) {
    const repository = new PropertiesRepository();
    const useCase = new ListPropertiesUseCase(repository);

    const response = await useCase.execute();

    return reply.status(201).send(response);
}
