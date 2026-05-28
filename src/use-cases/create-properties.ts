import { Properties } from "@/entities/properties";
import { properties } from "@/http/controller/properties/routes";

export type CreatePropertiesUseCaseRequest = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: number;
};
export type CreatePropertiesUseCaseResponse = {
	property: Properties;
};

export class CreatePropertiesUseCase {
	execute({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: CreatePropertiesUseCaseRequest): CreatePropertiesUseCaseResponse {
		const property = new Properties({
			name,
			totalValue,
			numberOfRooms,
			city,
			state,
			size,
		});

        properties.push(property)
		return { property };
	}
}
