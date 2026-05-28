import type { Properties } from "@/entities/properties";
import { properties } from "@/http/controller/properties/routes";

export type ListPropertiesUseCaseResponse = {
	properties: Properties[];
};

export class ListPropertiesUseCase {
	execute(): ListPropertiesUseCaseResponse {
		return { properties };
	}
}
