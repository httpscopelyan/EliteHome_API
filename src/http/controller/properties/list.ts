import type { FastifyReply, FastifyRequest } from "fastify";
import { ListPropertiesUseCase } from "@/use-cases/list-properties";


export async function list(_request: FastifyRequest, reply: FastifyReply) {
    const useCase = new ListPropertiesUseCase();

    const response = useCase.execute();

    return reply.status(201).send(response);
}
