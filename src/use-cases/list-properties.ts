import type { PropertiesRepository } from "@/database/repository/properties";
import type { Properties } from "@/entities/properties";

export type ListPropertiesUseCaseResponse = {
	properties: Properties[];
};
export class ListPropertiesUseCase {
	constructor(private repository: PropertiesRepository) {}

	async execute(): Promise<ListPropertiesUseCaseResponse> {
		const properties = await this.repository.find();
		return { properties };
	}
}
