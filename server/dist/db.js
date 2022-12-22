"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    username: "postgres",
    host: "localhost",
    database: "mart",
    password: "kevin@pc",
    port: 5432,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
