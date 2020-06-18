"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = require("./routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use(morgan_1.default("combined"));
app.use(function (req, res, next) {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Headers", "Authorization");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(routes_1.routes);
app.listen(process.env.PORT || 3000, function () { return console.log("Listening on port 1337"); });
