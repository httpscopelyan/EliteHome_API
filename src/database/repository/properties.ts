import { knex } from "@/database";
import type { Properties } from "@/entities/properties";
import { PropertySchema } from "../schemas/property";

export class PropertiesRepository {
	async create(property: Properties): Promise<Properties> {
		const [createdProperty] = await knex<PropertySchema>("properties")
			.insert({
				name: property.name,
				total_value: property.totalValue,
				number_of_rooms: property.numberOfRooms,
				city: property.city,
				state: property.state,
				size: property.size,
			})
			.returning("*");

		if (!createdProperty) {
			throw new Error("Argumentos invalidos");
		}

		const propertyEntity = new PropertySchema(createdProperty).toEntity();
		return propertyEntity;
	}

	async find(): Promise<Properties[]> {
		const properties = await knex<PropertySchema>("properties");

		const propertiesEntities = properties.map((property) =>
			new PropertySchema(property).toEntity(),
		);

        return propertiesEntities
	}
}
