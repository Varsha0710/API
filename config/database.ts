import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize= new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});