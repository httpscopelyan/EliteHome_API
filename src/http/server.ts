import { app } from "./app.js";

const APP_PORT = 4000;

app
	.listen({
		host: "0.0.0.0",
		port: APP_PORT,
	})
	.then(() => console.log(`Http server is running in port ${APP_PORT}`));
