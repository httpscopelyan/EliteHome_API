import path from "node:path";
import { fileURLToPath } from 'node:url'
import type { Knex } from "knex";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Update with your config settings.

const config: Knex.Config = {
	client: "postgresql",
	connection: "postgres://docker:docker@localhost:5432/elitehome",
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
		directory: path.join(__dirname, "src", "database", "migrations"),
	},
};

export default config;
