"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const mysql_1 = __importDefault(require("../config/mysql"));
var sequelize = new sequelize_1.default(mysql_1.default.database, mysql_1.default.user, mysql_1.default.password, {
    host: mysql_1.default.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});
exports.default = sequelize;
//# sourceMappingURL=dbConnect.js.map