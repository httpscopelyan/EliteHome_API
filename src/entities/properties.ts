type PropertiesType = {
	id?: string | undefined;
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: string;
	created_at?: Date | undefined;
	updated_at?: Date | undefined;
};
// TODO definir todos os atributos da entidade Property

export class Properties {
	public id?: string | undefined;
	public name: string;
	public totalValue: number;
	public numberOfRooms: number;
	public city: string;
	public state: string;
	public size: string;
	public created_at?: Date | undefined;
	public updated_at?: Date | undefined;

	constructor({
		id,
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
		created_at,
		updated_at,
	}: PropertiesType) {
		this.id = id;
		this.name = name;
		this.totalValue = totalValue;
		this.numberOfRooms = numberOfRooms;
		this.city = city;
		this.state = state;
		this.size = size;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}
}
