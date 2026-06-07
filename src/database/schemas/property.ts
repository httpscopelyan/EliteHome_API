import { Properties } from "@/entities/properties";

export type PropertiesSchemaType = {
	id?: string | undefined;
	name: string;
	size: string;
	city: string;
	state: string;
	total_value: number;
	number_of_rooms: number;
	created_at?: string | undefined;
	updated_at?: string | undefined;
};

export class PropertySchema {
	public id?: string | undefined;
	public name: string;
	public size: string;
	public city: string;
	public state: string;
	public total_value: number;
	public number_of_rooms: number;
	public created_at?: string | undefined;
	public updated_at?: string | undefined;

	constructor({
		id,
		name,
		city,
		number_of_rooms,
		size,
		state,
		total_value,
		created_at,
		updated_at,
	}: PropertiesSchemaType) {
		this.id = id;
		this.name = name;
		this.city = city;
		this.size = size;
		this.state = state;
		this.total_value = total_value;
		this.number_of_rooms = number_of_rooms;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	public toEntity() {
		const {
			id,
			name,
			size,
			city,
			state,
			number_of_rooms,
			total_value,
			created_at,
			updated_at,
		} = this;

		return new Properties({
			id,
			name,
			size,
			city,
			state,
			numberOfRooms: number_of_rooms,
			totalValue: total_value,
			created_at: created_at ? new Date(created_at) : undefined,
			updated_at: updated_at ? new Date(updated_at) : undefined,
		});
	}
}
