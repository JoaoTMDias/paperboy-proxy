import express from "express";
import morgan from "morgan";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use((req, res, next) => {
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Headers", "Authorization");
	res.header("Access-Control-Allow-Origin", "*");
	next();
});
app.use(routes);


app.listen(1337, () => console.log("Listening on port 1337"));
