import packageJson from "../../package.json";

export class AppInfoUseCases {
	execute() {
		const { name, version } = packageJson;

		return { name, version };
	}
}
