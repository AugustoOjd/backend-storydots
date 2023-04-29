"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_NAME, USERNAME, SECRET_PASSWORD, HOST } = process.env;
// export const sequelize = new Sequelize(DB_NAME!, USERNAME!, SECRET_PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres'
//   });
exports.sequelize = new sequelize_1.Sequelize(`postgres://${USERNAME}:${SECRET_PASSWORD}@${HOST}:5432/${DB_NAME}`);
