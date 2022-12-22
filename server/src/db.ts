import { DataSource } from "typeorm";
import { User } from "./entities/User";
export const AppDataSource = new DataSource({
  type: "postgres",
  username: "postgres",
  host: "localhost",
  database: "mart",
  password: "kevin@pc",
  port: 5432,
  synchronize: true,
  logging: true,
  entities: [User],
})