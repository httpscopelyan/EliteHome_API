import { PropertySchema } from "@/database/schemas/property";
import { Properties } from "@/entities/properties";
import { knex } from "../database/index";

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

		// TODO salvar as properties no banco de dados
		const [createdProperty] = await knex<PropertySchema>("properties")
			.insert({
				name: property.name,
				total_value: property.totalValue,
				number_of_rooms: property.numberOfRooms,
				city: property.city,
				state: property.state,
				size: property.size
			})
			.returning("*");

		if (!createdProperty) {
			throw new Error("Argumentos invalidos");
		}

		const propertyEntity = new PropertySchema(createdProperty).toEntity();

		return { property: propertyEntity};
	}
}
