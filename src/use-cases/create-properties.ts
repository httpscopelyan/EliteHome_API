
import type { PropertiesRepository } from "@/database/repository/properties";
import { Properties } from "@/entities/properties";

export type CreatePropertiesUseCaseRequest = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: string;
};
export type CreatePropertiesUseCaseResponse = {
	property: Properties;
};

export class CreatePropertiesUseCase {
	constructor(private repository: PropertiesRepository) {}
	async execute({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: CreatePropertiesUseCaseRequest): Promise<CreatePropertiesUseCaseResponse> {
		const property = new Properties({
			name,
			totalValue,
			numberOfRooms,
			city,
			state,
			size,
		});

		
		const createdProperty = await this.repository.create(property)

		return { property: createdProperty};
	}
}
